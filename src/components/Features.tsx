import { motion } from 'framer-motion';
import { User, Mic, MonitorPlay, TrendingUp, Shuffle, Settings, Image } from 'lucide-react';

const engineParts = [
  {
    icon: <User className="w-6 h-6 text-purple-400" />,
    title: "AI Human Clones",
    desc: "Hyper-realistic digital presenters and avatars tailored to your brand."
  },
  {
    icon: <Mic className="w-6 h-6 text-blue-400" />,
    title: "AI Voice & Audio",
    desc: "Studio-grade voices across dialects and languages for maximum retention."
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-pink-400" />,
    title: "Editing & VFX",
    desc: "Cinematic, fast-paced, scroll-stopping content that hooks viewers instantly."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Growth Strategy",
    desc: "SEO, title engineering, and algorithm optimization to dominate search & suggested."
  },
  {
    icon: <Shuffle className="w-6 h-6 text-orange-400" />,
    title: "Multi-Channel Scaling",
    desc: "Run 2–10+ faceless channels simultaneously without lifting a finger."
  },
  {
    icon: <Settings className="w-6 h-6 text-indigo-400" />,
    title: "Full Automation System",
    desc: "From idea generation to publishing — fully automated content pipelines."
  },
  {
    icon: <Image className="w-6 h-6 text-yellow-400" />,
    title: "Thumbnail Science",
    desc: "High CTR thumbnails crafted with A/B testing psychology to win clicks."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-[#020202] relative">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-purple-900/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            The Full AI Content Engine
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            We don't just use tools; we build robust AI production pipelines to mass-produce premium content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {engineParts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-start h-full group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
          {/* Empty space filler for layout perfection */}
          <div className="glass-card bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-8 rounded-2xl hidden xl:flex flex-col items-center justify-center border-dashed border-white/20">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 animate-spin" style={{ animationDuration: '4s' }}>
              <Settings className="w-5 h-5" />
            </div>
            <p className="mt-4 text-xs text-white/40 uppercase tracking-widest font-semibold">Engine Running</p>
          </div>
        </div>
      </div>
    </section>
  );
};
