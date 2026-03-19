import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "We Plan",
      description: "Our strategists analyze your niche and build a custom content roadmap with guaranteed high-converting angles."
    },
    {
      number: "02",
      title: "We Create",
      description: "Our AI systems take over, generating scripts, voices, visuals, and final edits without you lifting a finger."
    },
    {
      number: "03",
      title: "We Scale",
      description: "We optimize, distribute across multiple channels, and compound your growth month over month."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Idea to Empire in <span className="gradient-text">3 Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center text-3xl font-bold text-white mb-8 border-purple-500/30 relative z-10 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                {step.number}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
