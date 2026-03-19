import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Type, TrendingUp, BarChart2, Video, FileText, Lock, X, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const FREE_TOOLS = [
  {
    id: 'roi',
    title: 'ROI Calculator',
    description: 'Estimate views & revenue potential based on your niche and current metrics.',
    icon: Calculator,
    cta: 'Calculate Now'
  },
  {
    id: 'titles',
    title: 'YouTube Title Generator',
    description: 'AI-powered viral titles engineered for maximum CTR and search ranking.',
    icon: Type,
    cta: 'Generate Titles'
  },
  {
    id: 'topics',
    title: 'Viral Topic Finder',
    description: 'Discover trending ideas and untapped content gaps in your industry.',
    icon: TrendingUp,
    cta: 'Find Topics'
  },
  {
    id: 'growth',
    title: 'Channel Growth Estimator',
    description: 'Predict channel subscriber and view growth using algorithmic modeling.',
    icon: BarChart2,
    cta: 'Estimate Growth'
  }
];

const LOCKED_TOOLS = [
  {
    id: 'editor',
    title: 'AI Video Editor',
    description: 'Automatically edit full cinematic videos with AI-driven pacing and cuts.',
    icon: Video
  },
  {
    id: 'scripts',
    title: 'AI Script Writer',
    description: 'Generate high-converting, retention-optimized scripts instantly.',
    icon: FileText
  }
];

export default function Tools() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Tool Specific States
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleToolClick = (id: string) => {
    setActiveModal(id);
    setShowResults(false);
    setIsSimulating(false);
    setInputValue('');
    setInputValue2('');
  };

  const handleRunTool = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResults(true);
    }, 1500);
  };

  const activeToolData = FREE_TOOLS.find(t => t.id === activeModal);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Growth Engine Toolkit
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Free AI Tools to Grow Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Content Empire</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-8"
          >
            Used by creators generating millions of views with AI-powered systems. Test the engine before you scale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button onClick={() => navigate('/#pricing')} className="px-8 py-4 text-lg group">
              Unlock Full Automation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* FREE TOOLS */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Zap className="w-6 h-6 text-cyan-400" />
            Free Production Tools
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FREE_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => handleToolClick(tool.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">{tool.description}</p>
                  <div className="flex justify-center mt-6">
                    <Button variant="secondary" className="group-hover:bg-purple-500/20 group-hover:border-purple-500/50 group-hover:text-purple-400">
                      {tool.cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LOCKED PAID TOOLS */}
        <div className="mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Lock className="w-6 h-6 text-purple-400" />
            Enterprise Exclusives
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCKED_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Lock className="w-8 h-8 text-white/50 mb-3" />
                  <Button variant="secondary" onClick={() => navigate('/#pricing')} className="scale-90 group-hover:scale-100 transition-transform">
                    Upgrade to Unlock
                  </Button>
                </div>
                
                <div className="relative z-0 opacity-50 grayscale transition-all duration-300 group-hover:blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/40">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title} <span className="text-xs align-top ml-2 px-2 py-0.5 rounded-full bg-white/10 text-white/60">Locked</span></h3>
                  <p className="text-gray-500">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CONVERSION SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-1 px-4 sm:px-12 py-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl opacity-50" />
          <div className="absolute inset-0 glass-card rounded-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              These tools show what's possible.
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We build the system that actually does it for you. Stop executing manually and start scaling with our Full AI Engine.
            </p>
            <div className="flex justify-center mt-8">
              <Button onClick={() => navigate('/#pricing')} className="px-10 py-5 text-lg font-bold w-full sm:w-auto">
                Get Full System
              </Button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* INTERACTIVE MODAL (UPSell) */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card max-w-lg w-full rounded-2xl border border-white/10 p-8 relative overflow-hidden text-center max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {isSimulating ? (
                <div className="py-8">
                  <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Data...</h3>
                  <p className="text-gray-400 text-sm">Processing through AI models...</p>
                </div>
              ) : showResults ? (
                <div className="py-4 text-left">
                  <div className="mb-8">
                    {activeModal === 'roi' && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Estimated ROI Potential</h3>
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                          <p className="text-sm text-gray-400 mb-1">Monthly Revenue Projection</p>
                          <p className="text-3xl font-bold text-green-400">${(Number(inputValue) * Number(inputValue2) / 1000).toLocaleString()}</p>
                        </div>
                        <p className="text-sm text-gray-400">Based on {Number(inputValue).toLocaleString()} views at a ${inputValue2} CPM.</p>
                      </div>
                    )}
                    {activeModal === 'titles' && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Viral Title Concepts</h3>
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white">1. How I Built a {inputValue} Empire (Zero Experience)</div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white">2. The Truth About {inputValue} No One Tells You</div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[2px] relative flex items-center justify-between">
                            <span>3. I Tried {inputValue} for 30 Days and...</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[3px] relative flex items-center justify-between">
                            <span>4. The Ultimate Guide to {inputValue} in 2024</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[4px] relative flex items-center justify-between">
                            <span>5. Why Your {inputValue} Strategy is Failing</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                        </div>
                      </div>
                    )}
                    {activeModal === 'topics' && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Trending Topics</h3>
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white flex justify-between"><span>AI Workflow Automation</span> <span className="text-green-400 text-sm">High Search</span></div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white flex justify-between"><span>Faceless Niche Strategies</span> <span className="text-green-400 text-sm">Trending</span></div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[2px] relative flex items-center justify-between">
                            <span>Algorithmic Growth Hacks</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[3px] relative flex items-center justify-between">
                            <span>Monetization Arbitrage</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                          <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-white/50 blur-[4px] relative flex items-center justify-between">
                            <span>High-Ticket Sponsorships</span>
                            <Lock className="w-4 h-4 text-purple-400 absolute right-4" />
                          </div>
                        </div>
                      </div>
                    )}
                    {activeModal === 'growth' && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Channel Growth Forecast</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                            <p className="text-sm text-gray-400 mb-1">6-Month Target</p>
                            <p className="text-2xl font-bold text-white">{(Number(inputValue) * 2.5).toLocaleString()} Subs</p>
                          </div>
                          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <p className="text-sm text-purple-300 mb-1">12-Month Target</p>
                            <p className="text-2xl font-bold text-purple-400">{(Number(inputValue) * 5.8).toLocaleString()} Subs</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">Based on compounding algorithm momentum and an average of {inputValue2} uploads/week.</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t border-white/10 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Want full automation?</h4>
                    <p className="text-gray-400 text-sm mb-6">
                      We don't just provide tools. Our Enterprise AI System actually builds, edits, and scales these channels for you automatically.
                    </p>
                    <Button onClick={() => navigate('/#pricing')} className="w-full py-3 mb-2">
                      Unlock Full System
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="py-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                    {activeToolData?.icon && <activeToolData.icon className="w-8 h-8 text-cyan-400" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{activeToolData?.title}</h3>
                  <p className="text-gray-400 mb-8">
                    {activeToolData?.description}
                  </p>
                  
                  <form onSubmit={handleRunTool} className="space-y-4 text-left">
                    {activeModal === 'roi' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Estimated Monthly Views</label>
                          <input type="number" required min="1000" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. 500000" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Average CPM ($)</label>
                          <input type="number" required min="1" step="0.1" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. 4.5" />
                        </div>
                      </>
                    )}
                    {activeModal === 'titles' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Video Topic / Keyword</label>
                        <input type="text" required value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. AI Automation" />
                      </div>
                    )}
                    {activeModal === 'topics' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Your Niche</label>
                        <input type="text" required value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. Finance, Tech, Health" />
                      </div>
                    )}
                    {activeModal === 'growth' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Current Subscribers</label>
                          <input type="number" required min="0" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. 1000" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Videos Uploaded per Week</label>
                          <input type="number" required min="1" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500" placeholder="e.g. 3" />
                        </div>
                      </>
                    )}
                    
                    <Button type="submit" className="w-full py-4 mt-4">
                      {activeToolData?.cta}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
