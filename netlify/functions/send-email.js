function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeLine(str) {
  return String(str).replace(/[\r\n]/g, ' ').trim().slice(0, 500);
}

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name = sanitizeLine(body.name ?? '');
  const email = sanitizeLine(body.email ?? '');
  const message = String(body.message ?? '').trim().slice(0, 5000);

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Tous les champs sont requis.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Adresse email invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Configuration serveur manquante.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // "from" doit être un domaine vérifié sur Resend.
  // En attendant la vérification de decreaction.com, utilise onboarding@resend.dev
  // pour les tests. Remplace ensuite par : contact@decreaction.com
  const FROM_ADDRESS = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Studio Decreaction <${FROM_ADDRESS}>`,
      to: ['decreaction@gmail.com'],
      reply_to: email,
      subject: `Nouveau message de ${name} — Studio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <h2 style="border-bottom:2px solid #eee;padding-bottom:12px">
            Nouveau contact — Studio Decreaction
          </h2>
          <table style="font-size:14px;border-collapse:collapse;width:100%">
            <tr>
              <td style="padding:8px 0;font-weight:600;width:100px">Nom</td>
              <td style="padding:8px 0">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600">Email</td>
              <td style="padding:8px 0">
                <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
          <h3 style="margin-top:24px">Message</h3>
          <p style="font-size:14px;line-height:1.6;background:#f9f9f9;padding:16px;border-radius:6px;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    }),
  });

  if (!emailRes.ok) {
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
