import { motion } from 'framer-motion';
import { PlaySquare, Hourglass, Wallet } from 'lucide-react';

const achievements = [
  {
    icon: <PlaySquare className="w-8 h-8 text-blue-400" strokeWidth={1.5} />,
    value: "10M+",
    metric: "Views Generated",
    title: "Build Faceless Channels",
    desc: "Launch profitable YouTube channels without showing your face or stepping in front of a camera."
  },
  {
    icon: <Hourglass className="w-8 h-8 text-purple-400" strokeWidth={1.5} />,
    value: "40+",
    metric: "Hours Saved Weekly",
    title: "Save Time",
    desc: "Eliminate manual production workload and reclaim your time for strategy and scale."
  },
  {
    icon: <Wallet className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />,
    value: "$500K+",
    metric: "Revenue Generated",
    title: "Generate Real Revenue",
    desc: "Earn from AdSense, high-ticket sponsorships, and strategic affiliate integrations."
  }
];

export const Achieve = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            What You'll Achieve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Our clients don't just get content — they get measurable, business-transforming results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-10 rounded-[2rem] relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 bg-[#0a0a0a]"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-10 relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-tighter block mb-2">{item.value}</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-purple-400 group-hover:text-purple-300 transition-colors">{item.metric}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white/90">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
