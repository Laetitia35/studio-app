import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    title: 'Site essentiel',
    price: 'À partir de 600€',
    description: 'Idéal pour se lancer ou moderniser une présence simple.',
    features: ['1 à 3 pages', 'Design moderne et responsive', 'Mise en ligne incluse'],
    accent: 'primary',
  },
  {
    title: 'Site sur mesure',
    price: 'À partir de 900€',
    description: 'Pour un projet plus complet, structuré et soigné.',
    features: ['4 à 6 pages', 'Intégration personnalisée', 'Optimisation et structure propre'],
    accent: 'accent',
    highlighted: true,
  },
  {
    title: 'Fonctionnalités & amélioration',
    price: 'Sur devis',
    description: 'Vous avez déjà un site ou un besoin précis ?',
    features: ['Ajout de fonctionnalités', 'Correction ou amélioration d\'un site existant', 'Intégration API ou logique backend simple'],
    accent: 'primary',
  },
];

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Tarifs</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-4">
            Tarifs <span className="text-primary text-glow-green">indicatifs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des repères simples pour vous situer. Chaque projet étant différent, un devis précis est proposé après échange.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl border bg-card/50 backdrop-blur-sm p-8 flex flex-col gap-6 transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? 'border-accent/40 glow-cyan'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Le plus demandé
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-heading font-semibold text-foreground text-xl mb-1">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className={`text-2xl font-heading font-bold ${plan.highlighted ? 'text-accent' : 'text-primary'}`}>
                {plan.price}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-medium text-sm px-5 py-2.5 rounded-xl transition-all ${
                  plan.highlighted
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
                }`}
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-border bg-card/30 p-7 text-center max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Les tarifs varient selon la complexité, les délais et les besoins spécifiques.{' '}
            Les projets sont réalisés avec soin et dans les délais convenus, ce qui permet de proposer des prestations efficaces et accessibles.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-xl text-base hover:bg-primary/90 transition-all glow-green"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-muted-foreground text-sm mt-3">
            Expliquez votre besoin en quelques lignes, je vous réponds rapidement avec une proposition adaptée.
          </p>
        </motion.div>
      </div>
    </section>
  );
}