import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: "Build Faceless Channels",
      desc: "Dominate niches without ever showing your face or recording audio."
    },
    {
      title: "Reclaim Your Time",
      desc: "Stop editing and scripting. Focus on strategy while AI does the heavy lifting."
    },
    {
      title: "Predictable Revenue",
      desc: "More volume and better retention leads directly to higher AdSense and sponsorship income."
    },
    {
      title: "Omnichannel Presence",
      desc: "Be everywhere at once. Automatically repurpose long-form into viral shorts."
    }
  ];

  return (
    <section id="results" className="py-24 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Stop Competing. <br />
              <span className="gradient-text">Start Dominating.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Manual content creation is dead. The creators scaling to 7-figures are leveraging automation. We give you the infrastructure to beat the algorithm with volume and quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ArrowUpRight className="w-5 h-5 text-blue-400" />
                    {benefit.title}
                  </div>
                  <p className="text-white/50 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 glass-card rounded-3xl p-8 relative overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-white/40 text-sm font-medium mb-1">Total Views Generated</div>
                  <div className="text-4xl font-bold text-white">42,859,301</div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold flex items-center gap-1 border border-green-500/30">
                  <ArrowUpRight className="w-4 h-4" /> 312%
                </div>
              </div>
              
              {/* Fake Chart */}
              <div className="h-48 w-full flex items-end gap-2 mt-12">
                {[40, 30, 60, 50, 80, 70, 100, 90, 120, 110, 150, 200].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}px` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-purple-600/50 to-blue-500/80 rounded-t-sm"
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
