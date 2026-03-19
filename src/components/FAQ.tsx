import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Does AI content actually perform well on YouTube?",
      a: "Yes. The algorithm only cares about click-through rate and retention. Our AI scripts, pacing, and visual storytelling are engineered explicitly to maximize those metrics. The result is content that performs just as well, if not better, than human-made videos."
    },
    {
      q: "Can my channel get demonetized for using AI?",
      a: "No. YouTube monetizes high-quality, original content. We don't scrape or spam. Every script is original, every voiceover is premium, and the visuals are heavily edited. We manage dozens of fully monetized channels."
    },
    {
      q: "Do I need to record my face or voice?",
      a: "Not unless you want to. We can clone your voice and appearance if you want to build a personal brand without being on camera. Otherwise, we can use our premium AI avatars and voices to build faceless channels."
    },
    {
      q: "How long does it take to see results?",
      a: "Content is a compounding game. While some channels see viral traction in weeks, we build for long-term empires. We recommend committing for at least 6 months to see massive, predictable revenue streams."
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card rounded-2xl overflow-hidden border border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mx-6 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
