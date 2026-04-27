import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xs">S</span>
            </div>
            <span className="font-heading font-semibold text-foreground">Studio</span>
            <span className="text-muted-foreground text-xs">by Decreaction</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://decreaction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              decreaction.com
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-border">|</span>
            <span className="text-muted-foreground text-xs">Mentions légales</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} Decreaction. Tous droits réservés. Développé avec soin en France.
          </p>
        </div>
      </div>
    </footer>
  );
}