import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-lg w-full p-10 rounded-3xl border border-emerald-500/20 relative z-10 bg-white/[0.03] backdrop-blur-xl"
      >
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          >
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </motion.div>

          <h1 className="text-2xl font-bold mb-1">Thedot Studio Pvt. Ltd.</h1>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

          <h2 className="text-xl font-semibold mb-2">Complete Your Payment</h2>
          <p className="text-gray-400 text-sm mb-8">
            Pay via UPI, PayPal, or card and confirm your payment.
          </p>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 mb-8 w-full">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mr-2" />
              <h3 className="text-lg font-bold text-emerald-300">Payment Captured</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your payment has been captured and recorded. Our Client review process is active and may take up to 24 hours. Once verification is complete, access to your dashboard and premium content will be enabled. your activation key will be send it to you on your mail in 24hrs.
            </p>
          </div>

          <div className="flex justify-between items-center w-full text-xs font-mono text-gray-500 uppercase tracking-widest px-2">
            <span>Merchant:</span>
            <span>Thedot Studio Pvt. Ltd.</span>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="mt-10 w-full py-4 rounded-xl font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </motion.div>
    </div>
  );
}
