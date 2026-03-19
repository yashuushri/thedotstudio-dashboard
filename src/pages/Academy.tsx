import { motion } from 'framer-motion';
import { PlayCircle, Target, Zap, DollarSign, Brain, BarChart, XCircle, CheckCircle2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Academy() {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-24 pb-16 selection:bg-purple-500/30 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 px-4 z-10">
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:bg-white/[0.05] transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">Stop consuming AI. Start profiting from it.</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              Make Money With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                AI Content
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              The blueprint to building, scaling, and automating highly profitable content empires.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/checkout" state={{ planName: 'Full Academy Access', price: 19 }} className="w-full sm:w-auto">
                <Button className="group text-lg px-10 py-5 w-full shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.7)] transition-all duration-500">
                  <span className="font-bold">Start Learning ($19)</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/#pricing" className="w-full sm:w-auto">
                <Button variant="outline" className="text-lg px-10 py-5 w-full border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  Get Full System
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REALITY CHECK (PSYCHOLOGICAL) */}
      <section className="py-32 relative z-10 px-4 border-y border-white/[0.05] bg-gradient-to-b from-[#030303] via-zinc-950 to-[#030303]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-3xl md:text-5xl font-bold leading-tight text-gray-500/80"
          >
            <p className="hover:text-gray-300 transition-colors duration-500 cursor-default">You can learn infinite AI tools.</p>
            <p className="hover:text-gray-300 transition-colors duration-500 cursor-default">You can binge endless tutorials.</p>
            <p className="hover:text-gray-300 transition-colors duration-500 cursor-default">You can chase every new trend.</p>
            
            <div className="pt-12 relative">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <p className="text-white text-4xl md:text-6xl drop-shadow-2xl">
                But none of that matters if it isn't <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">printing money.</span>
              </p>
            </div>
            
            <div className="pt-12 space-y-4">
              <p className="text-xl md:text-2xl text-red-400/90 font-semibold tracking-wide flex items-center justify-center gap-3">
                <Flame className="w-6 h-6 animate-pulse" />
                99% of people stay stuck in the "learning phase."
              </p>
              <p className="text-3xl md:text-4xl text-white font-extrabold tracking-tight drop-shadow-lg">
                We build systems that pay you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT THIS IS (POSITIONING) */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.2]">This is not another bloated course library.</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
              This is a ruthless, execution-only system designed to bypass the theory and immediately scale your income using AI.
            </p>
            <ul className="space-y-6">
              {[
                "Deploy fully automated cash-cow channels",
                "Scale to millions of views using AI clones",
                "Generate passive, predictable daily revenue"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-xl font-medium text-gray-200 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-cyan-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
            <div className="relative bg-[#080808]/80 backdrop-blur-2xl p-10 md:p-12 border border-white/[0.08] rounded-[2rem] shadow-2xl overflow-hidden hover:border-white/[0.15] transition-colors duration-500">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-500/10 to-transparent blur-[80px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-3xl font-extrabold mb-4 flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                The Revenue Engine
              </h3>
              <p className="text-gray-400 mb-10 text-lg font-medium">We focus strictly on high-ROI monetization methods:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {["AdSense Payouts", "High-Ticket Affiliates", "Brand Sponsorships", "Multi-Channel Empires"].map((method, i) => (
                  <div key={i} className="group bg-white/[0.02] border border-white/[0.05] hover:border-green-500/30 hover:bg-green-500/5 rounded-2xl p-6 text-center font-bold text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)]">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-32 px-4 relative z-10">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/[0.05]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Inside The System</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium">The exact underground blueprints our clients use to generate 8-figure views.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Content Systems", icon: Brain, desc: "Build end-to-end production pipelines that operate 24/7 without you." },
              { title: "YouTube Automation", icon: PlayCircle, desc: "Launch highly profitable faceless channels that run entirely on autopilot." },
              { title: "Aggressive Monetization", icon: DollarSign, desc: "Extract maximum revenue per viewer and turn views into cold hard cash." },
              { title: "Viral Psychology", icon: Target, desc: "Weaponize algorithmic triggers that practically force viewers to click and engage." },
              { title: "Enterprise LLM Workflows", icon: Zap, desc: "Master advanced prompt engineering with OpenAI & Anthropic to out-create agencies." },
              { title: "Zero-Touch Pipelines", icon: BarChart, desc: "Connect tools via API for a 100% hands-free scaling experience." },
            ].map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/[0.05] hover:border-purple-500/30 hover:bg-white/[0.02] transition-all duration-500 group cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.08] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-500 relative z-10">
                  <module.icon className="w-7 h-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-100 group-hover:text-white transition-colors">{module.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION SECTION */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0f0505] border border-red-500/20 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 to-red-400/50"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/10 blur-[60px] rounded-full"></div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 mb-10">
                <ShieldCheck className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm">The Old Way</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
                Stuck in the Loop
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Drowning in endless, conflicting tutorials",
                  "Zero actual income generated from AI",
                  "Overwhelmed by complicated technical setups"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-xl text-gray-400 font-medium">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                      <XCircle className="w-4 h-4 text-red-500" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#050f08] border border-green-500/30 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group hover:border-green-500/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)]"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/10 blur-[60px] rounded-full group-hover:bg-green-500/20 transition-colors duration-500"></div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 mb-10 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <Flame className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-bold uppercase tracking-wider text-sm">The Dot Studio Way</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-10 drop-shadow-md">
                Empire Builder
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "Operating a portfolio of automated cash-cow channels",
                  "Commanding millions of views consistently",
                  "Generating real, life-changing daily revenue"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-xl text-gray-200 font-semibold">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/40 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* MENTORS SECTION */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Learn from the Best</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium">Industry leaders who have successfully engineered the systems we teach.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sahil',
                role: 'Creator',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzeCq76tnsXFNeJHzwzf31rUPJSVuF7vkiQ&s',
              },
              {
                name: 'Tam Trance',
                role: 'AI Engineer',
                image: 'https://yt3.googleusercontent.com/7-Ecr0dF22uV9lMqIUNRgR5EkjZrO43vGGIGgJh-ar7CH4SMoP8Y-eDnXdiFdgNXoEN7xvgT7g=s160-c-k-c0x00ffffff-no-rj',
              },
              {
                name: 'Bryan Kearney',
                role: 'OpenAI Alumni',
                image: 'https://i.insider.com/67bfbe5469253ccddf97b897?width=168&format=jpeg&auto=webp&crop=1:1,smart',
              },
              {
                name: 'Rohan Sahai',
                role: 'OpenAI Engineer',
                image: 'https://media.licdn.com/dms/image/v2/D5603AQHJsiQX0wBoVw/profile-displayphoto-shrink_200_200/B56ZPxQap8HQAc-/0/1734919433499?e=2147483647&v=beta&t=4XFDUXkvPiVdv1v5ObByo6W5f59mX5OjKrM_A0_05yE',
              }
            ].map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-purple-500/40 to-cyan-500/40 rounded-3xl opacity-0 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#050505] border border-white/10 group-hover:border-purple-500/50 rounded-3xl p-8 overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                    {mentor.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGICAL TRIGGER */}
      <section className="py-24 px-4 relative z-10 text-center border-t border-white/[0.05]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            You can stay on the sidelines watching others get rich with AI.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 block mt-6">Or you can start building something that pays you.</span>
          </h2>
        </motion.div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-4 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
          
          {/* Option 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-white/[0.05] flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-500"
          >
            <div>
              <div className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8 font-bold text-gray-400 uppercase tracking-widest">
                Option 1
              </div>
              <h3 className="text-3xl font-bold mb-6">Included with System</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">Get full access to the Academy absolutely free when you purchase any of our AI Automation systems.</p>
            </div>
            <Link to="/#pricing" className="w-full text-center py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-lg">
              View Premium Plans
            </Link>
          </motion.div>

          {/* Option 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0310] backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/60 hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-5 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm mb-8 font-bold uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Limited Time Access
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">$19</span>
                <span className="text-xl text-gray-500 font-medium">/ one-time</span>
              </div>
              <h3 className="text-2xl font-bold mb-10 text-white drop-shadow-md">Full Academy Access</h3>
            </div>
            <Link to="/checkout" state={{ planName: 'Full Academy Access', price: 19 }} className="relative z-10">
              <Button className="w-full py-6 text-xl font-bold shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-shadow duration-500">
                Unlock Academy
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 text-center relative z-10 border-t border-white/[0.05] bg-[#030303]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[1.1]">
            Build Your AI <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">Income System</span> Today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link to="/checkout" state={{ planName: 'Full Academy Access', price: 19 }} className="w-full sm:w-auto">
              <Button className="px-12 py-6 text-xl font-bold w-full shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.7)] transition-all duration-500 hover:-translate-y-1">
                Join Academy ($19)
              </Button>
            </Link>
            <Link to="/#pricing" className="w-full sm:w-auto">
              <Button variant="outline" className="px-12 py-6 text-xl font-bold w-full border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
                Get Full System
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
