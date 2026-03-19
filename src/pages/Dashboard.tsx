import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Wrench, Tv, BarChart, Zap, CreditCard, Settings, LogOut, Video, Eye, DollarSign, Sparkles, ArrowLeft, Loader2, FileText, TrendingUp, Search, Calendar, Image as ImageIcon, Crown, Plus, CheckCircle2, User, Mail, Shield, Play, Pause, Lock, Activity } from 'lucide-react';

const TOOLS = [
  // CONTENT
  { id: 'script', name: 'Script Generator', category: 'Content', icon: FileText, desc: 'Generate a structured viral script with hooks, body, and CTA.', inputs: [{ name: 'topic', label: 'Video Topic', type: 'text' }], run: (d:any) => `Hook: Are you still doing ${d.topic} the hard way? Stop right now.\n\nIntro: In this video, I'll show you the exact system we use to dominate ${d.topic} in 2026.\n\nBody:\n1. The Secret Framework\n2. The Execution\n3. The Scaling Phase\n\nCTA: Subscribe for more strategies.` },
  { id: 'title', name: 'Title Generator', category: 'Content', icon: FileText, desc: 'Generate 10 viral, high-CTR titles.', inputs: [{ name: 'keyword', label: 'Main Keyword', type: 'text' }], run: (d:any) => `1. I Tried ${d.keyword} For 30 Days (Shocking Results)\n2. The Ultimate ${d.keyword} Guide for Beginners\n3. Stop Doing ${d.keyword} Like This!\n4. How To Master ${d.keyword} In 10 Minutes\n5. 5 ${d.keyword} Mistakes You're Making` },
  { id: 'desc', name: 'Description Generator', category: 'Content', icon: FileText, desc: 'SEO optimized description.', inputs: [{ name: 'title', label: 'Video Title', type: 'text' }], run: (d:any) => `In this video, we dive deep into "${d.title}". \n\nWe cover everything you need to know to get started and scale. \n\nLinks mentioned:\n- Tool 1\n- Tool 2\n\nDon't forget to like and subscribe!` },
  { id: 'hook', name: 'Hook Generator', category: 'Content', icon: FileText, desc: 'First 5 seconds hooks to retain viewers.', inputs: [{ name: 'niche', label: 'Niche', type: 'text' }], run: (d:any) => `1. 99% of people in ${d.niche} fail because of THIS.\n2. I finally cracked the code to ${d.niche}.\n3. If you want to succeed in ${d.niche}, watch this before it's deleted.` },
  // GROWTH
  { id: 'roi', name: 'ROI Calculator', category: 'Growth', icon: TrendingUp, desc: 'Estimate views + revenue potential.', inputs: [{ name: 'videos', label: 'Videos per week', type: 'number' }, { name: 'cpm', label: 'Estimated CPM ($)', type: 'number' }], run: (d:any) => `Videos per month: ${d.videos * 4}\nEstimated Monthly Views: ${(d.videos * 4 * 15000).toLocaleString()}\nEstimated Revenue: $${(d.videos * 4 * 15000 * (d.cpm / 1000)).toLocaleString()}` },
  { id: 'growth', name: 'Channel Growth Estimator', category: 'Growth', icon: TrendingUp, desc: 'Predict channel growth timeline.', inputs: [{ name: 'currentSubs', label: 'Current Subscribers', type: 'number' }], run: (d:any) => `Month 1: ${Number(d.currentSubs) + 1500} subs\nMonth 3: ${Number(d.currentSubs) + 8000} subs\nMonth 6: ${Number(d.currentSubs) + 25000} subs\nMonth 12: ${Number(d.currentSubs) + 100000} subs!` },
  { id: 'viral', name: 'Viral Topic Finder', category: 'Growth', icon: Search, desc: 'Discover trending ideas.', inputs: [{ name: 'niche', label: 'Niche', type: 'text' }], run: (d:any) => `🔥 Trending Topics in ${d.niche}:\n1. AI Integration in ${d.niche}\n2. The 2026 ${d.niche} Strategy\n3. ${d.niche} Automation\n4. Zero-to-One ${d.niche} Guide` },
  { id: 'trend', name: 'Trend Analyzer', category: 'Growth', icon: Search, desc: 'Suggest trending niches.', inputs: [{ name: 'industry', label: 'Industry', type: 'text' }], run: (d:any) => `High momentum niches in ${d.industry}:\n- Micro-SaaS\n- Faceless AI Channels\n- Short-form Repurposing` },
  // CREATIVE
  { id: 'thumb', name: 'Thumbnail Idea Generator', category: 'Creative', icon: ImageIcon, desc: 'Visual + text concepts.', inputs: [{ name: 'title', label: 'Video Title', type: 'text' }], run: (d:any) => `Concept 1: Split screen showing Before (Sad) / After (Rich). Text: "DO THIS INSTEAD"\nConcept 2: Close up of your face looking shocked. Pointing at a graph going up. Text: "THE SECRET"` },
  { id: 'caption', name: 'Caption Generator', category: 'Creative', icon: FileText, desc: 'Social captions for promotion.', inputs: [{ name: 'topic', label: 'Topic', type: 'text' }], run: (d:any) => `Just dropped a massive video on ${d.topic}! 🚀\n\nIf you're struggling with this, I break down exactly how to fix it in 3 steps.\n\nLink in bio! 👇\n#${d.topic.replace(/\s/g, '')} #Growth #Creator` },
  { id: 'improve', name: 'Content Improver', category: 'Creative', icon: Sparkles, desc: 'Rewrite content better.', inputs: [{ name: 'text', label: 'Draft Text', type: 'textarea' }], run: (d:any) => `Here is the improved, high-converting version:\n\n"${d.text?.toUpperCase() || ''}!!! AND IT'S AMAZING!"\n\n(Okay, we made it punchier and added urgency).` },
  // AUTOMATION
  { id: 'planner', name: 'Content Planner', category: 'Automation', icon: Calendar, desc: 'Generate a weekly plan.', inputs: [{ name: 'frequency', label: 'Videos per week', type: 'number' }], run: (d:any) => `Monday: Scripting & Ideation\nTuesday: Recording ${d.frequency} videos\nWednesday: Editing Phase 1\nThursday: Editing Phase 2 & Thumbnails\nFriday: Scheduling & SEO Setup\nWeekend: Relax, the system is running.` },
  { id: 'scheduler', name: 'Upload Scheduler', category: 'Automation', icon: Calendar, desc: 'Mock scheduling system.', inputs: [{ name: 'videoName', label: 'Video Name', type: 'text' }, { name: 'time', label: 'Time (e.g. 5PM)', type: 'text' }], run: (d:any) => `✅ Video "${d.videoName}" successfully scheduled for ${d.time} across 4 platforms.\nSystem will automatically handle rendering, uploading, and metadata injection.` },
  { id: 'multimanager', name: 'Multi Channel Manager', category: 'Automation', icon: Tv, desc: 'Status of your empire.', inputs: [], run: () => `Channel 1: Healthy (Publishing daily)\nChannel 2: Warning (Needs new scripts)\nChannel 3: Growing (Up 40% this week)` },
  // MONETIZATION
  { id: 'revcalc', name: 'Revenue Calculator', category: 'Monetization', icon: DollarSign, desc: 'Detailed earnings estimate.', inputs: [{ name: 'views', label: 'Monthly Views', type: 'number' }], run: (d:any) => `AdSense: $${(d.views * 0.004).toLocaleString()}\nSponsorships: $${(d.views * 0.002).toLocaleString()}\nAffiliates: $${(d.views * 0.001).toLocaleString()}\n\nTotal Estimated: $${(d.views * 0.007).toLocaleString()}` },
  { id: 'affiliate', name: 'Affiliate Finder', category: 'Monetization', icon: DollarSign, desc: 'Suggest affiliate ideas.', inputs: [{ name: 'niche', label: 'Niche', type: 'text' }], run: (d:any) => `Top paying affiliates for ${d.niche}:\n1. High-ticket SaaS ($100/mo recurring)\n2. Specialized Course ($500 payout)\n3. Equipment/Tools (10% commission)` },
  { id: 'sponsor', name: 'Sponsorship Estimator', category: 'Monetization', icon: DollarSign, desc: 'Estimate brand deals.', inputs: [{ name: 'avgViews', label: 'Average Views per Video', type: 'number' }], run: (d:any) => `With ${d.avgViews} average views:\nYou should charge roughly $${(d.avgViews * 0.025).toLocaleString()} per dedicated integration.\nDon't accept anything under $${(d.avgViews * 0.015).toLocaleString()}!` },
  // ENTERPRISE
  { id: 'videoed', name: 'AI Video Editor', category: 'Enterprise', icon: Crown, desc: 'Automatically edit full videos.', inputs: [{ name: 'script', label: 'Script', type: 'textarea' }], run: () => `[ENTERPRISE ENGINE ACTIVE]\nScanning script...\nGenerating B-Roll...\nApplying VFX & Transitions...\n\n✅ Video rendered in 4K. Ready for download.` },
  { id: 'voicegen', name: 'AI Voice Generator', category: 'Enterprise', icon: Crown, desc: 'Ultra-realistic text-to-speech.', inputs: [{ name: 'text', label: 'Text to speak', type: 'textarea' }, { name: 'voice', label: 'Voice Model (e.g. Marcus)', type: 'text' }], run: (d:any) => `[ENTERPRISE ENGINE ACTIVE]\nCloning parameters for ${d.voice}...\nSynthesizing audio...\n\n✅ Studio-grade audio file generated (WAV format).` },
  { id: 'channelbuild', name: 'Full Channel Builder', category: 'Enterprise', icon: Crown, desc: 'One-click channel creation.', inputs: [{ name: 'topic', label: 'Broad Topic', type: 'text' }], run: (d:any) => `[ENTERPRISE ENGINE ACTIVE]\nGenerating Channel Name based on ${d.topic}...\nGenerating Logo & Banner...\nCreating 30-day content calendar...\n\n✅ Empire initialized. Ready to deploy.` }
];

function HomeView({ setView }: { setView: (v: string) => void }) {
  const stats = [
    { label: 'Videos Generated', value: '1,402', icon: Video, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Active Channels', value: '12', icon: Tv, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { label: 'Total Views', value: '8.4M', icon: Eye, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { label: 'Total Revenue', value: '$142,500', icon: DollarSign, color: 'text-green-400', bg: 'bg-green-400/10' },
  ];
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Yash</h1>
          <p className="text-gray-400">Here's what's happening with your content empire today.</p>
        </div>
        <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium flex items-center shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]">
          <Sparkles className="w-4 h-4 mr-2" />
          Production Enterprise Maxed + Infinite
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setView('tools')} className="text-left p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors group">
              <h3 className="font-bold text-purple-400 group-hover:text-purple-300">Generate Script</h3>
              <p className="text-sm text-gray-400 mt-1">Create a new viral video script</p>
            </button>
            <button onClick={() => setView('tools')} className="text-left p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors group">
              <h3 className="font-bold text-cyan-400 group-hover:text-cyan-300">Find Topic</h3>
              <p className="text-sm text-gray-400 mt-1">Discover trending niches</p>
            </button>
            <button onClick={() => setView('tools')} className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors group col-span-2 text-center">
              <h3 className="font-bold text-blue-400 group-hover:text-blue-300">Open All Tools</h3>
              <p className="text-sm text-gray-400 mt-1">Access your 20+ enterprise AI tools</p>
            </button>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <h2 className="text-xl font-bold mb-4">Recent Generations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <Video className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium">Top 10 AI Tools {2024 + i}</p>
                    <p className="text-xs text-gray-400">Generated {i * 2} hours ago</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">Completed</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsView() {
  const [activeTool, setActiveTool] = useState<any>(null);
  const [inputs, setInputs] = useState<any>({});
  
  // Standard tool state
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  
  // Enterprise tool state
  const [entLoadingPhase, setEntLoadingPhase] = useState<number>(-1); // -1: Not loading, 0: Initializing, 1: Processing, 2: Finalizing, 3: Done
  const [entResult, setEntResult] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const loadingSteps = ["Initializing AI...", "Processing...", "Finalizing output..."];

  const handleRun = () => {
    if (activeTool.category === 'Enterprise') {
      // Enterprise Flow
      setEntResult(null);
      setEntLoadingPhase(0);
      
      let currentPhase = 0;
      const interval = setInterval(() => {
        currentPhase++;
        if (currentPhase < 3) {
          setEntLoadingPhase(currentPhase);
        } else {
          clearInterval(interval);
          setEntLoadingPhase(3); // Done
          
          // Generate Mock Data based on tool ID
          if (activeTool.id === 'videoed') {
            setEntResult({
              title: "AI Generated Video",
              effects: ["Cinematic Cut", "Transitions", "Color Grading"],
              status: "Rendered successfully"
            });
          } else if (activeTool.id === 'voicegen') {
            setEntResult({
              voice: inputs.voice || "Professional Male",
              duration: "45 seconds",
              status: "Voice generated"
            });
          } else if (activeTool.id === 'channelbuild') {
            setEntResult({
              channel: "AI Wealth Hub",
              niche: inputs.topic || "Finance + AI",
              videos: ["Make Money with AI", "Top AI Tools", "Passive Income Ideas"],
              status: "Empire Initialized"
            });
          }
        }
      }, 1000); // 3 seconds total (3 steps x 1 sec)

    } else {
      // Standard Flow
      setLoading(true); setOutput('');
      setTimeout(() => {
        setOutput(activeTool.run(inputs));
        setLoading(false);
      }, 1200);
    }
  };

  if (activeTool) {
    const isEnterprise = activeTool.category === 'Enterprise';

    return (
      <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-right-8 duration-300">
        <button onClick={() => { 
          setActiveTool(null); 
          setOutput(''); 
          setInputs({}); 
          setEntResult(null);
          setEntLoadingPhase(-1);
          setIsPlaying(false);
        }} className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
        </button>
        
        <div className={`rounded-2xl p-8 shadow-2xl border ${isEnterprise ? 'bg-purple-900/10 border-purple-500/50 shadow-[0_0_50px_-15px_rgba(168,85,247,0.3)]' : 'bg-white/[0.02] border-white/[0.05]'}`}>
          <div className="flex items-center space-x-4 mb-8 relative">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isEnterprise ? 'bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg' : 'bg-purple-500/10 text-purple-400'}`}>
              <activeTool.icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                {activeTool.name}
              </h1>
              <p className="text-gray-400">{activeTool.desc}</p>
            </div>
            {isEnterprise && (
              <div className="ml-auto flex items-center space-x-3 shrink-0">
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/50 text-sm font-bold flex items-center shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <Lock className="w-4 h-4 mr-1.5" /> Enterprise Only
                </span>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {activeTool.inputs.map((inp: any) => (
              <div key={inp.name}>
                <label className="block text-sm font-medium text-gray-300 mb-2">{inp.label}</label>
                {inp.type === 'textarea' ? (
                  <textarea className={`w-full bg-black/50 border rounded-xl p-4 text-white focus:outline-none transition-colors h-32 ${isEnterprise ? 'border-purple-500/30 focus:border-purple-400 shadow-inner' : 'border-white/10 focus:border-purple-500'}`} onChange={(e) => setInputs({ ...inputs, [inp.name]: e.target.value })} placeholder={`Enter ${inp.label.toLowerCase()}...`} />
                ) : (
                  <input type={inp.type} className={`w-full bg-black/50 border rounded-xl p-4 text-white focus:outline-none transition-colors ${isEnterprise ? 'border-purple-500/30 focus:border-purple-400 shadow-inner' : 'border-white/10 focus:border-purple-500'}`} onChange={(e) => setInputs({ ...inputs, [inp.name]: e.target.value })} placeholder={`Enter ${inp.label.toLowerCase()}...`} />
                )}
              </div>
            ))}
            
            <button 
              onClick={handleRun} 
              disabled={loading || (entLoadingPhase >= 0 && entLoadingPhase < 3)} 
              className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${isEnterprise ? 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:opacity-100' : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90'}`}
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : entLoadingPhase >= 0 && entLoadingPhase < 3 ? (
                <Loader2 className="w-6 h-6 animate-spin mr-3" /> 
              ) : (
                <><Sparkles className="w-5 h-5 mr-2" /> Run Tool</>
              )}
              {entLoadingPhase >= 0 && entLoadingPhase < 3 && <span>{loadingSteps[entLoadingPhase]}</span>}
            </button>
          </div>

          {/* STANDARD OUTPUT */}
          {!isEnterprise && output && (
            <div className="mt-8 p-6 bg-black/40 rounded-xl border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Generated Output</h3>
              <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-gray-100">{output}</pre>
            </div>
          )}

          {/* ENTERPRISE RICH OUTPUT */}
          {isEnterprise && entLoadingPhase === 3 && entResult && (
            <div className="mt-8 space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="p-8 bg-black/60 rounded-2xl border border-purple-500/30 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6 border-b border-white/10 pb-4">
                    <Activity className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-bold tracking-wide uppercase">{entResult.status}</span>
                  </div>

                  {activeTool.id === 'videoed' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm text-gray-400 mb-1">Generated Title</h4>
                        <p className="text-2xl font-bold text-white">{entResult.title}</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-3">Timeline Preview</h4>
                        <div className="h-8 w-full bg-gray-900 rounded-lg overflow-hidden flex shadow-inner">
                          <div className="h-full bg-blue-500/80 w-1/4 border-r border-black" title="Intro / Hook"></div>
                          <div className="h-full bg-purple-500/80 w-1/2 border-r border-black" title="Body / B-Roll"></div>
                          <div className="h-full bg-cyan-500/80 w-1/4" title="Outro / CTA"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                          <span>0:00</span>
                          <span>4:35</span>
                          <span>8:20</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-400 mb-2">Effects Applied</h4>
                        <div className="flex flex-wrap gap-2">
                          {entResult.effects.map((fx: string) => (
                            <span key={fx} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300">
                              {fx}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTool.id === 'voicegen' && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-sm text-gray-400 mb-1">Voice Model Active</h4>
                          <p className="text-2xl font-bold text-white flex items-center">
                            {entResult.voice} <span className="ml-3 text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">Studio Grade</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <h4 className="text-sm text-gray-400 mb-1">Duration</h4>
                          <p className="text-lg font-medium text-white">{entResult.duration}</p>
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4 mt-6">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center transition-colors shadow-lg shadow-purple-500/30 shrink-0"
                        >
                          {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                        </button>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-1000 ${isPlaying ? 'w-2/3' : 'w-0'}`}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{isPlaying ? '0:30' : '0:00'}</span>
                            <span>{entResult.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTool.id === 'channelbuild' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1">Channel Name</h4>
                          <p className="text-xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{entResult.channel}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1">Target Niche</h4>
                          <p className="text-xl font-bold text-white capitalize">{entResult.niche}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-400 mb-3">Initial Content Plan (First 3 Videos)</h4>
                        <div className="space-y-2">
                          {entResult.videos.map((vid: string, idx: number) => (
                            <div key={idx} className="flex items-center p-3 rounded-lg bg-gray-900/50 border border-white/5">
                              <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mr-3">{idx + 1}</span>
                              <span className="text-gray-200 font-medium">{vid}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                        <h4 className="text-xs text-green-400 uppercase tracking-wider mb-1">Primary Monetization</h4>
                        <p className="text-lg font-medium text-green-100">High-Ticket Affiliate & YouTube AdSense</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* UPSELL CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/50 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)] flex flex-col items-center text-center relative overflow-hidden">
                 <h3 className="text-xl font-bold text-white mb-2">Ready to automate this entirely?</h3>
                 <p className="text-gray-400 mb-6 max-w-md">Unlock full automation with our system. Let the AI build, schedule, and scale this for you 24/7.</p>
                 <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                   Upgrade to Enterprise
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const categories = [...new Set(TOOLS.map(t => t.category))];
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Tool Suite</h1>
        <p className="text-gray-400">Your enterprise-grade arsenal for content domination.</p>
      </div>
      {categories.map(cat => (
        <div key={cat}>
          <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2 flex items-center">
            {cat} Tools
            {cat === 'Enterprise' && <Lock className="w-4 h-4 ml-2 text-purple-400" />}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TOOLS.filter(t => t.category === cat).map(tool => {
              const isEnt = tool.category === 'Enterprise';
              return (
                <button key={tool.id} onClick={() => setActiveTool(tool)} className={`text-left p-6 rounded-2xl transition-all group relative overflow-hidden ${isEnt ? 'bg-purple-900/10 border border-purple-500/30 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 hover:bg-purple-500/5'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${isEnt ? 'from-purple-500/20 to-cyan-500/10' : 'from-purple-500/10 to-transparent'}`} />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isEnt ? 'bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg' : 'bg-white/5 text-gray-300 group-hover:text-purple-400 group-hover:bg-purple-500/20'}`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-1 flex items-center">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{tool.desc}</p>
                    
                    {isEnt && (
                      <span className="inline-flex px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold items-center">
                        <Lock className="w-3 h-3 mr-1" /> Enterprise Only
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChannelsView() {
  const channels = [
    { name: 'Finance Fast', subs: '142K', status: 'Active', rev: '$4,200', views: '1.2M' },
    { name: 'Tech Daily', subs: '89K', status: 'Active', rev: '$2,800', views: '800K' },
    { name: 'Stoic Mindset', subs: '250K', status: 'Active', rev: '$8,100', views: '2.5M' },
    { name: 'Luxury Auto', subs: '12K', status: 'Scaling', rev: '$400', views: '150K' },
  ];
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">Channel Manager</h1>
          <p className="text-gray-400">Monitor and scale your multi-channel empire.</p>
        </div>
        <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold flex items-center transition-colors shadow-lg shadow-purple-500/20">
          <Plus className="w-5 h-5 mr-2" /> Add Channel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {channels.map((ch, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white">
                  <Tv className="w-6 h-6" />
                </div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${ch.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {ch.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{ch.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{ch.subs} Subscribers</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Monthly Views</p>
                  <p className="font-bold text-cyan-400 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> {ch.views}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Est. Revenue</p>
                  <p className="font-bold text-green-400">{ch.rev}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsView() {
  const mockBars = [40, 60, 45, 80, 65, 90, 110, 85, 120, 140, 100, 160];
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-gray-400">Your network performance across all channels.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-gray-400 mb-1">Total Views (30 Days)</p>
          <h2 className="text-4xl font-bold text-white mb-2">24.5M</h2>
          <p className="text-sm text-green-400 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> +12.5% from last month</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-gray-400 mb-1">Total Revenue (30 Days)</p>
          <h2 className="text-4xl font-bold text-green-400 mb-2">$84,200</h2>
          <p className="text-sm text-green-400 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> +8.2% from last month</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-gray-400 mb-1">Total Subscribers</p>
          <h2 className="text-4xl font-bold text-white mb-2">1.2M</h2>
          <p className="text-sm text-green-400 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> +45K this month</p>
        </div>
      </div>
      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
        <h3 className="text-xl font-bold mb-8 flex items-center">
          <BarChart className="w-5 h-5 mr-2 text-purple-400" /> Revenue Growth (YTD)
        </h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {mockBars.map((height, i) => (
            <div key={i} className="w-full relative group">
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-cyan-400 rounded-t-sm opacity-70 group-hover:opacity-100 transition-opacity" style={{ height: `${(height / 160) * 100}%` }} />
              <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-white/20 z-10">
                ${(height * 1000).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-gray-500 text-sm">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>
    </div>
  );
}

function BillingView() {
  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">Billing & Plan</h1>
        <p className="text-gray-400">Manage your subscription and usage.</p>
      </div>
      <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 shadow-[0_0_50px_-15px_rgba(168,85,247,0.3)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 relative z-10 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Crown className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Production Enterprise</h2>
            </div>
            <p className="text-purple-300">Maxed + Infinite Add-on</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-400 mb-1">Current Plan</p>
            <p className="text-4xl font-bold text-white">$45,609<span className="text-xl text-gray-500 font-normal">/yr</span></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 border-t border-purple-500/20 pt-8">
          <div className="space-y-3">
            {['Unlimited AI Engine Access', 'Unlimited Channels', 'Priority 24/7 Rendering', 'Dedicated Account Manager'].map(f => (
              <div key={f} className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> {f}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {['Custom AI Voice Clones', 'API Access', 'White-label Dashboard', '1-on-1 Strategy Calls'].map(f => (
              <div key={f} className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <p className="font-bold">Visa ending in 4242</p>
            <p className="text-sm text-gray-400">Expires 12/28</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold">Update Method</button>
      </div>
    </div>
  );
}

function SettingsView({ handleLogout }: { handleLogout: () => void }) {
  return (
    <div className="space-y-8 max-w-2xl animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your profile and preferences.</p>
      </div>
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-6">
          <h2 className="text-xl font-bold flex items-center"><User className="w-5 h-5 mr-2 text-purple-400" /> Profile Information</h2>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/20">Y</div>
            <div>
              <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium mb-2">Change Avatar</button>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input type="text" defaultValue="Yash" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
              <input type="text" defaultValue="TheDot Studio" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <div className="flex items-center w-full bg-black/50 border border-white/10 rounded-xl p-3 text-gray-400">
              <Mail className="w-4 h-4 mr-2" /> business.yashuuu@gmail.com
            </div>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-6">
          <h2 className="text-xl font-bold flex items-center"><Shield className="w-5 h-5 mr-2 text-cyan-400" /> Security</h2>
          <div>
            <button className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold w-full text-left flex justify-between items-center">
              Change Password <span className="text-gray-500">Updated 2 months ago</span>
            </button>
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold w-full text-left flex justify-between items-center">
              Two-Factor Authentication <span className="text-green-500 bg-green-500/10 px-2 py-1 rounded">Enabled</span>
            </button>
          </div>
        </div>
        <div className="pt-4">
          <button onClick={handleLogout} className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors font-medium p-2 rounded-lg hover:bg-red-500/10">
            <LogOut className="w-5 h-5" /> <span>Sign out of all devices</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [view, setView] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('thedot_user');
    if (!user) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('thedot_user');
    navigate('/login');
  };

  const navItems = [
    { id: 'home', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'tools', name: 'Tools', icon: Wrench },
    { id: 'channels', name: 'Channels', icon: Tv },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex text-white font-sans">
      <div className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col hidden md:flex shrink-0">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            TheDot Studio
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = view === item.id;
            return (
              <button key={item.id} onClick={() => setView(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4">
          <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all w-full text-left">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto h-screen relative">
        <header className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Yash</p>
              <p className="text-xs text-purple-400">Enterprise Maxed</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
              Y
            </div>
          </div>
        </header>
        <main className="p-6 md:p-10">
          {view === 'home' && <HomeView setView={setView} />}
          {view === 'tools' && <ToolsView />}
          {view === 'channels' && <ChannelsView />}
          {view === 'analytics' && <AnalyticsView />}
          {view === 'automation' && <ToolsView /> /* Route Automation to Tools temporarily as they share logic */}
          {view === 'billing' && <BillingView />}
          {view === 'settings' && <SettingsView handleLogout={handleLogout} />}
        </main>
      </div>
    </div>
  );
}
