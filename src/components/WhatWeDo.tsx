import { motion } from 'framer-motion';
import { 
  User, 
  Mic2, 
  Wand2, 
  LineChart, 
  Layers, 
  Cpu, 
  MousePointerClick
} from 'lucide-react';

const features = [
  {
    icon: <User className="w-6 h-6 text-indigo-400" strokeWidth={1.5} />,
    title: "AI Human Clones",
    desc: "Hyper-realistic digital presenters and avatars tailored to your brand.",
    gradient: "from-indigo-500/20 to-transparent"
  },
  {
    icon: <Mic2 className="w-6 h-6 text-rose-400" strokeWidth={1.5} />,
    title: "AI Voice & Audio",
    desc: "Studio-grade voices across dialects and languages for maximum retention.",
    gradient: "from-rose-500/20 to-transparent"
  },
  {
    icon: <Wand2 className="w-6 h-6 text-fuchsia-400" strokeWidth={1.5} />,
    title: "Editing & VFX",
    desc: "Cinematic, fast-paced, scroll-stopping content that hooks viewers instantly.",
    gradient: "from-fuchsia-500/20 to-transparent"
  },
  {
    icon: <LineChart className="w-6 h-6 text-emerald-400" strokeWidth={1.5} />,
    title: "Growth Strategy",
    desc: "SEO, title engineering, and algorithm optimization to dominate search & suggested.",
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
    title: "Multi-Channel Scaling",
    desc: "Run 2–10+ faceless channels simultaneously without lifting a finger.",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-400" strokeWidth={1.5} />,
    title: "Full Automation System",
    desc: "From idea generation to publishing — fully automated content pipelines.",
    gradient: "from-amber-500/20 to-transparent"
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />,
    title: "Thumbnail Science",
    desc: "High CTR thumbnails crafted with A/B testing psychology to win clicks.",
    gradient: "from-cyan-500/20 to-transparent"
  }
];

export function WhatWeDo() {
  return (
    <section id="services" className="py-32 relative bg-black overflow-hidden">
      {/* Premium glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            The Full AI Content Engine
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl font-medium"
          >
            We don't just use tools; we build robust AI production pipelines to mass-produce premium content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-[24px] p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:-translate-y-1 bg-[#0a0a0a] ${
                i === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
              }`}
            >
              {/* Radial gradient hover effect */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full items-center text-center sm:items-start sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white/90">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
