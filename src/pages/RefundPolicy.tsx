import { motion } from 'framer-motion';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Legal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Refund Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: October 24, 2024</p>
          
          <div className="space-y-12 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. General Overview</h2>
              <p>
                At TheDot Studio, we are committed to providing premium AI systems and educational resources. Because our services involve immediate access to proprietary systems, digital content, and automated pipelines, our refund policy is strictly enforced.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Digital Products & Academy</h2>
              <p>
                All sales of digital products, including the $19 Academy Access, are final. Upon purchase, you are granted immediate access to our exclusive materials and strategies. Due to the nature of digital goods, we do not offer refunds for these purchases under any circumstances.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Premium AI Plans</h2>
              <p>
                For our premium subscription tiers (Content Automate, Content Express, Production Enterprise), we allocate significant computational resources and dedicated team bandwidth immediately upon enrollment. As a result, standard refunds are not provided once the service term has begun.
              </p>
              <p>
                However, if we fail to deliver the agreed-upon services or automated channels as outlined in your contract, you may request a review within the first 14 days. Refunds in these cases are issued at the sole discretion of TheDot Studio's management team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Exceptions</h2>
              <p>
                Refunds will only be considered in the case of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Duplicate accidental transactions.</li>
                <li>Significant, documented technical failures on our end that prevent system access for over 72 hours.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
              <p>
                If you believe you qualify for an exception or have questions about your billing, please contact our support team at <a href="mailto:support@thedotstudio.com" className="text-purple-400 hover:text-purple-300 transition-colors">support@thedotstudio.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
