import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const metrics = [
  { value: 500, suffix: '+', label: 'Clients Served', duration: 3 }, // normal
  { value: 15000, suffix: '+', label: 'Videos Produced', duration: 6 }, // slow
  { value: 8, suffix: 'B+', label: 'Views Generated', duration: 12 }, // superest slow ++
  { value: 100, suffix: 'K+', label: 'Hours of Content Created', duration: 8 }, // superest slow
];

const logos = [
  "Beast Production",
  "Valnet Inc.",
  "HiLo Media",
  "ZANE Productions",
  "T-Series",
  "Creator Circle",
  "Nova Reach",
  "Beast Production",
  "Valnet Inc.",
  "HiLo Media",
  "ZANE Productions",
  "T-Series",
  "Creator Circle",
  "Nova Reach"
];

export const SocialProof = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Counters */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                {inView ? (
                  <CountUp end={metric.value} duration={metric.duration} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-purple-500">{metric.suffix}</span>
              </h3>
              <p className="text-sm font-medium text-white/50 uppercase tracking-widest">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Ticker */}
        <div className="text-center">
          <p className="text-sm font-semibold text-white/40 uppercase tracking-[0.2em] mb-12">
            Trusted by Leading Brands
          </p>
          <div className="relative overflow-hidden flex items-center w-full max-w-6xl mx-auto mask-image-gradient">
            <div className="flex animate-marquee space-x-16 min-w-max items-center justify-start h-16 pointer-events-none">
              {logos.map((logo, i) => (
                <div key={i} className="text-2xl md:text-3xl font-bold text-white/20 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity flex-shrink-0">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
