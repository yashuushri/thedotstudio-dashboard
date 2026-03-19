import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield } from 'lucide-react';

export const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: <Book size={20} />,
      items: ["Platform Overview", "Connecting Your Channels", "First Video Pipeline", "Understanding Credits"]
    },
    {
      title: "API Reference",
      icon: <Code size={20} />,
      items: ["Authentication", "Endpoints", "Webhooks", "Rate Limits"]
    },
    {
      title: "AI Engine Workflows",
      icon: <Zap size={20} />,
      items: ["Voice Synthesis Models", "Digital Twin Setup", "Script Parameterization", "VFX Prompts"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield size={20} />,
      items: ["Data Encryption", "Content Moderation", "Copyright Protection", "SLA Agreements"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#030303] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[250px_1fr] gap-12">
        
        {/* Sidebar */}
        <div className="hidden md:block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32 space-y-8"
          >
            {sections.map((section, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3 text-white font-bold tracking-tight mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                    {section.icon}
                  </div>
                  {section.title}
                </div>
                <div className="space-y-3 border-l border-white/10 ml-4 pl-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="text-sm font-medium text-white/40 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="md:border-l md:border-white/5 md:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-white">
              Documentation
            </h1>
            <p className="text-xl text-white/50 font-medium mb-12">
              Everything you need to automate your content pipelines and integrate with the TheDot Studio Enterprise API.
            </p>

            <div className="prose prose-invert max-w-none prose-p:text-white/60 prose-headings:text-white prose-a:text-purple-400">
              <h2>Introduction</h2>
              <p>
                Welcome to the official documentation for TheDot Studio's AI Engine. Whether you're on the Content Automate tier or leveraging a custom Enterprise setup, this guide provides the technical and strategic blueprints needed to maximize your content ROI.
              </p>
              
              <div className="glass-card p-6 rounded-2xl border border-white/5 my-8 bg-white/[0.02]">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Zap size={18} className="text-yellow-400" /> Quick Start
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  Are you a developer looking to integrate our video generation pipelines directly into your own CMS? Check out our Node.js SDK.
                </p>
                <code className="bg-black/50 px-4 py-3 rounded-xl block text-sm text-green-400 border border-white/5 font-mono">
                  npm install @thedotstudio/ai-engine
                </code>
              </div>

              <h2>Core Concepts</h2>
              <p>
                The Engine operates on a multi-stage pipeline: Ideation &rarr; Scripting &rarr; Synthesis (Voice + Avatar) &rarr; VFX & Assembly &rarr; Distribution. 
                You can hook into any of these stages manually via your dashboard, or programmatically via webhooks to automate the entire lifecycle.
              </p>
              
              <h2>Authentication</h2>
              <p>
                Enterprise API access requires an active Bearer Token. You can generate API keys directly from your workspace settings page under <strong>Developer Settings</strong>.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
