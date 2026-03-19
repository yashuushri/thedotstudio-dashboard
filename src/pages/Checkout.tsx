import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, QrCode, CreditCard, Wallet, Lock, CheckCircle2, Copy } from 'lucide-react';

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [method, setMethod] = useState<'upi' | 'paypal' | 'card'>('upi');
  const [countdown, setCountdown] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [copied, setCopied] = useState(false);

  const price = state?.price || 10497;
  const planName = state?.planName || 'Content Automate';

  // Handle countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleMethodChange = (newMethod: 'upi' | 'paypal' | 'card') => {
    setMethod(newMethod);
    setCountdown(30);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      navigate('/success');
    }, 2500); // simulate verifying delay
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Format time (e.g. 00:30)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Secure Checkout</h1>
          <p className="text-gray-400">
            You selected the <span className="text-white font-medium">{planName}</span> plan. Complete your payment using your preferred method.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Details & Methods */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Total Payable Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex justify-between items-center bg-white/[0.02]">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Payable Now</p>
                <p className="text-xs text-gray-500">Includes all taxes</p>
              </div>
              <p className="text-4xl font-bold tracking-tight">${price.toLocaleString()}</p>
            </div>

            {/* Payment Info Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400 text-sm tracking-wide uppercase font-medium">Payment Info</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Payment Type:</span>
                <span className="font-medium text-white">One-Time Payment</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                ZERO GATEWAY FEES
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 uppercase">
                {method} APPROVED PAYMENT
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                ENCRYPTED & SECURE
              </span>
            </div>

            {/* Security Banner */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 flex items-center mt-6">
              <Shield className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
              <p className="text-sm text-emerald-100/80">
                <span className="font-semibold text-emerald-300">Secure Payment</span> 256-bit encrypted protected transaction
              </p>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <button 
                onClick={() => handleMethodChange('upi')}
                className={`py-3 px-4 rounded-xl flex flex-col items-center justify-center border transition-all ${method === 'upi' ? 'bg-purple-500/20 border-purple-500 text-purple-300' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
              >
                <QrCode className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">UPI</span>
              </button>
              <button 
                onClick={() => handleMethodChange('paypal')}
                className={`py-3 px-4 rounded-xl flex flex-col items-center justify-center border transition-all ${method === 'paypal' ? 'bg-[#003087]/40 border-[#0079C1] text-blue-300' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
              >
                <Wallet className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">PayPal</span>
              </button>
              <button 
                onClick={() => handleMethodChange('card')}
                className={`py-3 px-4 rounded-xl flex flex-col items-center justify-center border transition-all ${method === 'card' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
              >
                <CreditCard className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">Card</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Form/QR */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-white/[0.02] h-full flex flex-col">
              
              {/* --- UPI SECTION --- */}
              {method === 'upi' && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium mb-6">Scan & Pay</h3>
                  <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    {/* Simulated QR Code */}
                    <div className="w-48 h-48 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-lg">
                      <QrCode className="w-32 h-32 text-gray-800" strokeWidth={1} />
                    </div>
                  </div>
                  
                  <div className="w-full space-y-4">
                    <div className="border border-white/10 rounded-xl p-4 text-center bg-white/5">
                      <p className="text-xs text-gray-400 tracking-wider uppercase mb-1">QR Expires In</p>
                      <p className="text-2xl font-mono font-bold text-white">{formatTime(countdown)}</p>
                    </div>

                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-xs text-gray-500 uppercase tracking-widest">Or pay to this UPI ID</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <div 
                      onClick={() => copyToClipboard('payment@thedot')}
                      className="border border-white/10 hover:border-purple-500/50 rounded-xl p-4 text-center bg-white/5 cursor-pointer flex justify-center items-center group transition-colors"
                    >
                      <span className="font-medium mr-2">payment@thedot</span>
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />}
                    </div>
                  </div>
                </div>
              )}

              {/* --- PAYPAL SECTION --- */}
              {method === 'paypal' && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium mb-6">Pay via PayPal</h3>
                  <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(0,121,193,0.2)]">
                    <div className="w-48 h-48 bg-gray-100 flex items-center justify-center border border-gray-200 rounded-lg">
                      <QrCode className="w-32 h-32 text-[#003087]" strokeWidth={1} />
                    </div>
                  </div>
                  
                  <div className="w-full space-y-4">
                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-xs text-gray-500 uppercase tracking-widest">Or use direct link</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <a 
                      href="https://paypal.me/yashshri7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#0079C1]/30 hover:border-[#0079C1] rounded-xl p-4 text-center bg-[#003087]/20 text-white font-medium transition-colors"
                    >
                      paypal.me/yashshri7
                    </a>
                  </div>
                </div>
              )}

              {/* --- CARD SECTION --- */}
              {method === 'card' && (
                <div className="flex-1 flex flex-col justify-center w-full">
                  <h3 className="text-xl font-medium mb-6 text-center">Enter Card Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 ml-1">Cardholder Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 ml-1">Card Number</label>
                      <div className="relative">
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono" />
                        <CreditCard className="w-5 h-5 text-gray-500 absolute left-4 top-3.5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 ml-1">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 ml-1">CVC</label>
                        <div className="relative">
                          <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono" />
                          <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Verification Section */}
        <div className="mt-8 glass-card rounded-2xl p-6 border border-white/10">
          
          {countdown > 0 ? (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-300 mb-4 text-center px-4">
                {method === 'card' 
                  ? "Waiting for secure CARD verification. Please authorize the transaction if prompted." 
                  : `Waiting for ${method.toUpperCase()} scan verification. Please complete payment in your app.`}
              </p>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden max-w-2xl mx-auto">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 30, ease: "linear" }}
                  className={`h-full ${method === 'upi' ? 'bg-purple-500' : method === 'paypal' ? 'bg-blue-500' : 'bg-cyan-500'}`}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-sm text-emerald-400 mb-4 font-medium">
                Verification ready. Click below to confirm transaction.
              </p>
              <button
                onClick={handleVerify}
                disabled={isVerifying}
                className="w-full max-w-md py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                {isVerifying ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying Payment...
                  </>
                ) : (
                  'Confirm Payment'
                )}
              </button>
            </div>
          )}
          
        </div>

      </div>
    </div>
  );
}
