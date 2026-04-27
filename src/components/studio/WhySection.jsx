import { motion } from 'framer-motion';
import { Lightbulb, Palette, FileCode, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Approche simple et pragmatique',
    description: "On va droit au but. Pas de sur-ingénierie, pas de fonctionnalités inutiles.",
  },
  {
    icon: Palette,
    title: 'Bon équilibre design / technique',
    description: 'Un rendu visuel soigné, soutenu par un code solide et performant.',
  },
  {
    icon: FileCode,
    title: 'Code propre et maintenable',
    description: 'Votre site est construit pour durer. Facile à faire évoluer, facile à reprendre.',
  },
  {
    icon: MessageCircle,
    title: 'Communication claire',
    description: 'Vous savez toujours où en est votre projet. Pas de surprise, pas de jargon.',
  },
];

export default function WhySection() {
  return (
    <section id="pourquoi" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-wide uppercase">Pourquoi nous</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-6">
              Pourquoi choisir{' '}
              <span className="text-accent text-glow-cyan">Studio</span> ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Parce que votre projet mérite une approche claire et honnête. 
              On construit des sites qui fonctionnent, avec du code que vous pourrez faire évoluer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Discutons de votre projet →
            </a>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 rounded-2xl overflow-hidden h-52 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                alt="Code propre et moderne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}