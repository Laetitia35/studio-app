import { motion } from 'framer-motion';
import { Globe, Layout, Server, Plus, Wrench } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Création de sites vitrines',
    description: 'Des sites modernes, rapides et optimisés pour présenter votre activité et convaincre vos visiteurs.',
    accent: 'primary',
  },
  {
    icon: Layout,
    title: 'Intégration front-end',
    description: "Transformation de vos maquettes en interfaces web pixel-perfect, fluides et responsive.",
    accent: 'accent',
  },
  {
    icon: Server,
    title: 'Développement back-end simple',
    description: 'API, fonctionnalités serveur et bases de données avec Symfony léger ou solutions adaptées.',
    accent: 'primary',
  },
  {
    icon: Plus,
    title: 'Ajout de fonctionnalités',
    description: "Formulaires, espaces clients, intégrations tierces… On ajoute ce dont vous avez besoin.",
    accent: 'accent',
  },
  {
    icon: Wrench,
    title: 'Correction & amélioration',
    description: "Audit, correction de bugs, optimisation de performance et refactoring de code existant.",
    accent: 'primary',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Nos services</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-4">
            Ce qu'on fait <span className="text-primary text-glow-green">concrètement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des prestations ciblées pour des résultats concrets, adaptées à votre budget.
          </p>
        </motion.div>

        {/* Showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-12 h-56 sm:h-72"
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
            alt="Création de sites web modernes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-primary font-medium mb-1">Nos réalisations</p>
              <p className="font-heading font-bold text-2xl text-foreground max-w-xs">Sites modernes, rapides et soignés</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isPrimary = service.accent === 'primary';
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-7 transition-all duration-300 ${isPrimary ? 'hover:border-primary/30' : 'hover:border-accent/30'}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${isPrimary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
                  <service.icon className={`w-5 h-5 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}