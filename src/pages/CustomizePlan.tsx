import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, SlidersHorizontal, Zap } from 'lucide-react';

const planData = {
  automate: {
    name: "Content Automate",
    minPrice: 1000,
    maxPrice: 12000,
    features: [
      { id: 'channels', label: 'YouTube Channels', min: 1, max: 2, default: 2 },
      { id: 'videos', label: 'Videos per Week', min: 1, max: 10, default: 4 },
      { id: 'shorts', label: 'Shorts per Week', min: 2, max: 20, default: 8 },
    ],
    perks: [
      "AI Voice & Basic Editing",
      "Standard Thumbnails",
      "Email Support",
      "Monthly Strategy Call"
    ]
  },
  express: {
    name: "Content Express",
    minPrice: 10000,
    maxPrice: 30000,
    features: [
      { id: 'channels', label: 'YouTube Channels', min: 2, max: 10, default: 4 },
      { id: 'videos', label: 'Videos per Month', min: 10, max: 150, default: 128 },
      { id: 'shorts', label: 'Shorts per Week', min: 10, max: 50, default: 20 },
    ],
    perks: [
      "Advanced VFX & Motion Graphics",
      "A/B Tested Thumbnails",
      "Premium Strategy Team",
      "Faster Delivery (48h)"
    ]
  },
  enterprise: {
    name: "Production Enterprise",
    minPrice: 30000,
    maxPrice: 50000,
    features: [
      { id: 'channels', label: 'YouTube Channels', min: 5, max: 30, default: 10 },
      { id: 'videos', label: 'Videos per Month', min: 20, max: 300, default: 100 },
      { id: 'managers', label: 'Dedicated Managers', min: 1, max: 5, default: 2 },
    ],
    perks: [
      "Full AI System API Access",
      "Custom Workflow Automation",
      "24/7 Dedicated Support Team",
      "Unlimited Revisions & Rendering"
    ]
  }
};

export default function CustomizePlan() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planKey = searchParams.get('plan') as keyof typeof planData || 'automate';
  const plan = planData[planKey] || planData.automate;

  // Initialize state based on default feature values
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    plan.features.forEach(f => {
      initial[f.id] = f.default;
    });
    return initial;
  });

  const [price, setPrice] = useState(plan.minPrice);

  // Calculate dynamic price smoothly based on slider positions
  useEffect(() => {
    let totalWeight = 0;
    
    plan.features.forEach(f => {
      const val = values[f.id];
      const weight = (val - f.min) / (f.max - f.min);
      totalWeight += weight;
    });

    const averageWeight = totalWeight / plan.features.length;
    // Map the 0-1 weight to the price range
    const calculatedPrice = plan.minPrice + (averageWeight * (plan.maxPrice - plan.minPrice));
    setPrice(Math.round(calculatedPrice));
  }, [values, plan]);

  const handleSliderChange = (id: string, val: number) => {
    setValues(prev => ({ ...prev, [id]: val }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-12 group mt-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customize <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">{plan.name}</span>
          </h1>
          <p className="text-xl text-gray-400">
            Adjust the sliders to build the perfect production capacity for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <div className="flex items-center mb-8">
                <SlidersHorizontal className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold">Production Limits</h2>
              </div>
              
              <div className="space-y-10">
                {plan.features.map((feature) => (
                  <div key={feature.id}>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-lg font-medium text-gray-200">{feature.label}</label>
                      <span className="text-2xl font-bold text-white">{values[feature.id]}</span>
                    </div>
                    <input 
                      type="range" 
                      min={feature.min} 
                      max={feature.max} 
                      value={values[feature.id]}
                      onChange={(e) => handleSliderChange(feature.id, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                      <span>Min: {feature.min}</span>
                      <span>Max: {feature.max}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Perks */}
            <div className="glass-card p-8 rounded-2xl border border-white/5">
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-semibold">Included in this tier</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.perks.map((perk, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-2xl border border-purple-500/20 sticky top-32">
              <h3 className="text-xl font-semibold mb-6">Estimated Cost</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">/ year</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-400">
                  <span>Base Plan</span>
                  <span>${plan.minPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2 pb-4 border-b border-white/10">
                  <span>Custom Add-ons</span>
                  <span>+ ${(price - plan.minPrice).toLocaleString()}</span>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] mb-4"
                onClick={() => navigate('/checkout', { state: { planName: plan.name, price } })}
              >
                Continue to Checkout
              </motion.button>
              
              <p className="text-xs text-center text-gray-500">
                Final limits and details will be confirmed during onboarding. Cancel anytime.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
