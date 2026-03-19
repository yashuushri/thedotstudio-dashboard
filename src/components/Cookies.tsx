import { motion } from 'framer-motion';

export const Cookies = () => {
  return (
    <div className="pt-32 pb-24 bg-[#030303] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12 border-b border-white/5 pb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
              Cookie Policy
            </h1>
            <p className="text-white/50 text-sm font-medium tracking-widest uppercase">
              Last Updated: October 24, 2024
            </p>
          </div>

          <div className="prose prose-invert prose-p:text-white/60 prose-headings:text-white max-w-none prose-a:text-purple-400">
            <p className="lead text-xl text-white/80">
              This Cookie Policy explains how TheDot Studio ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website at thedotstudio.com and use our AI content platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2>2. Why Do We Use Cookies?</h2>
            <p>
              We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website and Services to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
            </p>

            <h2>3. Types of Cookies We Use</h2>
            <ul className="text-white/60 space-y-2">
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website, such as access to secure areas. Because these cookies are strictly necessary, you cannot refuse them without impacting how our site functions.</li>
              <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
              <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
            </ul>

            <h2>4. How Can I Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at privacy@thedotstudio.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
