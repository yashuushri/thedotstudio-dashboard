import { motion } from 'framer-motion';
import { FileText, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';

export const AUP = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#020202] text-white selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <ShieldAlert className="w-4 h-4" />
            Legal Compliance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Acceptable Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Policy</span>
          </h1>
          <p className="text-lg text-white/40">
            Last Updated: October 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12 text-white/70 leading-relaxed"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-400" />
              1. Overview
            </h2>
            <p>
              This Acceptable Use Policy ("AUP") defines acceptable practices relating to the use of TheDot Studio’s AI generation, cloning, and automation services. By using our services, you agree to comply with this AUP.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              2. Prohibited Content
            </h2>
            <p>
              When utilizing our AI systems for content creation, you are strictly prohibited from generating, publishing, or distributing content that is:
            </p>
            <ul className="list-none space-y-3 mt-4">
              {[
                "Illegal, fraudulent, or inciting violence.",
                "Deepfakes or AI clones of unauthorized individuals without explicit written consent.",
                "Infringing on third-party intellectual property rights.",
                "Hate speech, discrimination, or severe harassment.",
                "Malicious misinformation intended to cause public harm."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              3. Commercial Use & Licensing
            </h2>
            <p>
              Clients retaining active Enterprise or Express licenses retain commercial rights to the generated content. However, TheDot Studio reserves the right to terminate accounts that utilize our automated systems for spamming platforms (e.g., uploading thousands of repetitive, low-quality videos to manipulate algorithms).
            </p>
          </section>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 mt-12">
            <p className="text-sm text-white/40">
              Violations of this Acceptable Use Policy may result in immediate suspension or termination of your services without a refund. If you have questions about whether your proposed use case violates this policy, please contact our legal team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
