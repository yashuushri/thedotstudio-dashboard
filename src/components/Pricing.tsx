import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Content Automate",
    price: "$10,497",
    period: "/year",
    features: [
      "2 Channels",
      "4 Videos/week",
      "8 Shorts/week",
      "4 Thumbnails",
      "AI Voice + Editing + VFX",
      "Strategy + Guidance"
    ],
    highlight: false,
    cta: "Purchase Plan"
  },
  {
    name: "Content Express",
    price: "$24,087",
    period: "/year",
    features: [
      "4 Channels",
      "128 Videos/month",
      "Unlimited Shorts",
      "256 Thumbnails",
      "Premium Strategy Team",
      "Faster delivery"
    ],
    highlight: false,
    cta: "Purchase Plan"
  },
  {
    name: "Production Enterprise",
    price: "$45,609",
    period: "/year",
    badge: "MOST POWERFUL",
    features: [
      "Full AI System Access",
      "Unlimited production capability",
      "Custom workflows",
      "Dedicated team",
      "Priority support",
      "1-year license"
    ],
    highlight: true,
    cta: "Purchase Enterprise"
  }
];

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-32 bg-[#020202] relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Invest in Domination
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Choose the AI engine that fits your revenue goals. No hidden fees. Full automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-3xl ${
                plan.highlight 
                  ? 'glass-card border-[2px] border-purple-500/50 shadow-[0_0_60px_rgba(139,92,246,0.15)] p-12 lg:-my-8 bg-[#0a0a0a] scale-100 lg:scale-105 z-10' 
                  : 'glass-card border-white/10 p-10 bg-[#050505]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className={`text-xl font-medium mb-4 ${plan.highlight ? 'text-purple-400' : 'text-white/80'}`}>
                  {plan.name}
                </h3>
                <div className="flex justify-center items-end gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-white/50 mb-2 font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlight ? 'text-purple-500' : 'text-white/40'}`} />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? 'secondary' : 'outline'} 
                size="lg" 
                className="w-full"
                onClick={() => navigate(`/customize?plan=${
                  plan.name.includes('Automate') ? 'automate' : 
                  plan.name.includes('Express') ? 'express' : 'enterprise'
                }`)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
