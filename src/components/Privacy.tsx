import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <div className="pt-32 pb-24 bg-[#030303] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12 border-b border-white/5 pb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm font-medium tracking-widest uppercase">
              Last Updated: October 24, 2024
            </p>
          </div>

          <div className="prose prose-invert prose-p:text-white/60 prose-headings:text-white max-w-none prose-a:text-purple-400">
            <p className="lead text-xl text-white/80">
              TheDot Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI content production services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This includes:
            </p>
            <ul className="text-white/60 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, contact information, billing details.</li>
              <li><strong>Digital Likeness & Voice Data:</strong> If you use our AI human cloning and voice synthesis services, we collect audio and visual samples strictly for the creation of your digital twin.</li>
              <li><strong>Channel Metrics:</strong> Analytics data from your connected YouTube or social media accounts to optimize content strategy.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive:
            </p>
            <ul className="text-white/60 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To generate and render automated video content as per your subscription tier.</li>
              <li>To train and improve your specific digital avatar (we do <strong>not</strong> use your likeness to train public models).</li>
              <li>To process payments and manage your Enterprise or Content Automate subscriptions.</li>
              <li>To deliver targeted growth strategies based on your channel analytics.</li>
            </ul>

            <h2>3. Data Security & Likeness Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information and digital likeness. Your voice and visual models are encrypted and stored securely. We maintain strict SLA agreements ensuring that your AI clones are only used for content you explicitly authorize via our dashboard or API.
            </p>

            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information or digital models to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact our legal team at legal@thedotstudio.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
