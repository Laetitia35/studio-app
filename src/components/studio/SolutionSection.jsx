import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Échange rapide',
    description: 'On discute de votre besoin, sans jargon technique. On comprend vos objectifs.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Proposition adaptée',
    description: 'Vous recevez une proposition claire avec le périmètre, les délais et le tarif.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Développement clair',
    description: 'On développe avec transparence. Vous suivez l\'avancement à chaque étape.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Livraison + accompagnement',
    description: 'Votre site est en ligne. On reste disponible pour le suivi et les ajustements.',
  },
];

export default function SolutionSection() {
  return (
    <section id="methode" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Notre méthode</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-4">
            Simple, direct, <span className="text-primary text-glow-green">efficace</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quatre étapes pour passer de l'idée au site en ligne, sans prise de tête.
          </p>
        </motion.div>

        {/* Visual banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-12 h-52 sm:h-64"
        >
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&auto=format&fit=crop&q=80"
            alt="Collaboration et développement web"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-primary font-medium mb-1">Notre approche</p>
              <p className="font-heading font-bold text-2xl text-foreground max-w-sm">Un process clair du brief à la mise en ligne</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-7 h-full hover:border-primary/30 transition-all duration-300">
                {/* Step number */}
                <span className="text-5xl font-heading font-bold text-primary/10 absolute top-4 right-5">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}