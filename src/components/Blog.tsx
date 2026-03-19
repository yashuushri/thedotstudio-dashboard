import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export const Blog = () => {
  const posts = [
    {
      title: "The Future of AI Video: Hyper-Realistic Clones",
      excerpt: "Why the creator economy is shifting from manual filming to fully automated digital avatars, and how top channels are already capitalizing on it.",
      date: "Oct 12, 2024",
      category: "AI Trends"
    },
    {
      title: "Hacking the YouTube Algorithm with Thumbnail Science",
      excerpt: "Stop guessing what works. Learn how we use A/B testing psychology, color theory, and facial emotion mapping to guarantee high CTRs.",
      date: "Oct 05, 2024",
      category: "Growth Strategy"
    },
    {
      title: "Building a Faceless Content Engine in 30 Days",
      excerpt: "A step-by-step breakdown of how to launch and scale a profitable YouTube channel without ever stepping in front of a camera.",
      date: "Sep 28, 2024",
      category: "Case Study"
    },
    {
      title: "Multi-Channel Scaling: Managing 10+ Niches",
      excerpt: "How Enterprise clients utilize our automated production pipelines to dominate multiple verticals simultaneously without burnout.",
      date: "Sep 15, 2024",
      category: "Enterprise"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030303] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent"
          >
            Insights & Strategy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl font-medium"
          >
            Deep dives into AI content production, algorithm optimization, and channel growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 uppercase">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-xs font-medium text-white/30">
                  <Calendar size={14} />
                  {post.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-white tracking-tight group-hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-white/50 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
