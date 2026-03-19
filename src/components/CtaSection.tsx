import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const CtaSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-r from-purple-600/30 via-blue-600/20 to-purple-600/30 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-[0_0_80px_rgba(139,92,246,0.15)]"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 mb-8 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50">
            Start Your <br className="hidden md:block" />
            Content Empire Today
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 mb-12 font-light max-w-2xl mx-auto">
            Stop trading time for content. Let our AI pipeline mass-produce, distribute, and monetize for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              variant="secondary" 
              size="xl" 
              className="w-full sm:w-auto px-10 py-5 text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
