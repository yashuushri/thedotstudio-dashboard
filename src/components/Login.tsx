import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'business.yashuuu@gmail.com' && password === '12345') {
        localStorage.setItem('thedot_user', JSON.stringify({
          name: 'Yash',
          plan: 'Production Enterprise Maxed + Infinite'
        }));
        navigate('/dashboard');
      } else {
        alert("Invalid credentials. Please use the registered enterprise account.");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 z-10 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">TheDot<span className="text-white/50">Studio</span></span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-card border border-white/10 rounded-2xl p-8 z-10 backdrop-blur-xl bg-black/40 shadow-2xl relative"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h1>
          <p className="text-sm font-medium text-white/50">
            {isLogin ? 'Enter your credentials to access your dashboard.' : 'Register with your activation key.'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.form 
            key={isLogin ? 'login' : 'register'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1 block">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1 block">Email address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@gmail.com" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1 block">Activation Key</label>
                <input 
                  type="text" 
                  required
                  placeholder="XXXX-XXXX-XXXX-XXXX" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium font-mono"
                />
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-medium text-white/80 block">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</a>
                )}
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1 block">Confirm Password</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                />
              </div>
            )}

            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Verifying...' : (isLogin ? 'Sign In' : 'Register Account')}
              </Button>
            </div>
            {isLogin && (
              <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-gray-400 text-center">
                Demo Account:<br/>
                Email: <span className="text-white">business.yashuuu@gmail.com</span><br/>
                Password: <span className="text-white">12345</span>
              </div>
            )}
          </motion.form>
        </AnimatePresence>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-white/40">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:text-purple-400 transition-colors cursor-pointer"
            >
              {isLogin ? 'Register here' : 'Sign in'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
