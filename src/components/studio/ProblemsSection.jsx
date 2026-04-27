import { motion } from 'framer-motion';
import { AlertCircle, Clock, Puzzle, Eye } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'Site vieillissant ou absent',
    description: "Votre site ne reflète plus votre image, ou vous n'en avez tout simplement pas encore.",
  },
  {
    icon: Clock,
    title: 'Besoin rapide d\'un site pro',
    description: "Vous avez besoin d'être en ligne rapidement, sans passer par des mois de développement.",
  },
  {
    icon: Puzzle,
    title: 'Fonctionnalités manquantes',
    description: "Ajouter un formulaire, une page ou une fonctionnalité simple ne devrait pas être compliqué.",
  },
  {
    icon: Eye,
    title: 'Manque de visibilité',
    description: "Sans site moderne et bien structuré, vos clients potentiels passent à côté de votre activité.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problemes" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">Vous vous reconnaissez ?</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-3 mb-4">
            Des problèmes <span className="text-accent text-glow-cyan">fréquents</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Beaucoup de PME, indépendants et startups rencontrent ces mêmes obstacles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-7 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-1.5">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}