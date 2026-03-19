import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export const CaseStudies = () => {
  const studies = [
    {
      title: "From 0 to 1M Subscribers in 90 Days",
      client: "Creator Circle",
      niche: "Finance & Wealth",
      metrics: [
        { icon: <Users size={18} />, value: "1.2M+", label: "Subscribers" },
        { icon: <TrendingUp size={18} />, value: "45M", label: "Monthly Views" }
      ],
      description: "Creator Circle came to us with a vision for a faceless finance channel. By leveraging our AI human clones and hyper-optimized script generation, we fully automated their production pipeline, publishing 4 videos a week with zero manual editing."
    },
    {
      title: "Scaling a SaaS YouTube Channel to $100k MRR",
      client: "Nova Reach",
      niche: "B2B Software",
      metrics: [
        { icon: <DollarSign size={18} />, value: "$105k", label: "New MRR" },
        { icon: <Clock size={18} />, value: "80hrs", label: "Saved/Week" }
      ],
      description: "Nova Reach needed top-of-funnel leads but their founders were too busy to film. We implemented our Enterprise AI pipeline, cloning the CEO's voice and likeness. The result? 15 targeted videos per month that directly converted viewers into high-paying SaaS customers."
    },
    {
      title: "Dominating the True Crime Niche",
      client: "ShadowDocs",
      niche: "Entertainment",
      metrics: [
        { icon: <TrendingUp size={18} />, value: "100M+", label: "Total Views" },
        { icon: <DollarSign size={18} />, value: "$450k", label: "AdSense Rev" }
      ],
      description: "True Crime requires intense pacing, cinematic VFX, and gripping voiceovers. Using our AI Voice Engine and advanced editing workflows, we built a scroll-stopping narrative format that consistently triggered the YouTube recommendation algorithm."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030303] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-medium"
          >
            Discover how we've helped leading brands and creators build dominant, fully-automated content empires.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {studies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group relative rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-12 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20 uppercase">
                      {study.client}
                    </span>
                    <span className="text-sm font-medium text-white/40">{study.niche}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">{study.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {study.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {study.metrics.map((metric, j) => (
                    <div key={j} className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                        {metric.icon}
                      </div>
                      <div className="text-3xl font-black text-white tracking-tighter mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-white/50">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
