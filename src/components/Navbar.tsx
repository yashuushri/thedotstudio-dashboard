import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide completely on specialized pages
  if (['/login', '/checkout', '/success', '/customize'].includes(location.pathname)) return null;

  const handleScrollToPricing = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 border-b border-white/[0.05] backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">TheDot<span className="text-white/50">Studio</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <a href="/#features" className="hover:text-white transition-colors">AI Engine</a>
            <Link to="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link to="/academy" className="hover:text-white transition-colors">Academy</Link>
            <Link to="/team" className="hover:text-white transition-colors">Team</Link>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</Link>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={handleScrollToPricing}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-white/70">
              <Link to="/" onClick={closeMenu} className="hover:text-white transition-colors">Home</Link>
              <a href="/#features" onClick={closeMenu} className="hover:text-white transition-colors">AI Engine</a>
              <Link to="/tools" onClick={closeMenu} className="hover:text-white transition-colors">Tools</Link>
              <Link to="/academy" onClick={closeMenu} className="hover:text-white transition-colors">Academy</Link>
              <Link to="/team" onClick={closeMenu} className="hover:text-white transition-colors">Team</Link>
              <a href="/#pricing" onClick={closeMenu} className="hover:text-white transition-colors">Pricing</a>
              <div className="w-full h-[1px] bg-white/10 my-4"></div>
              <Link to="/login" onClick={closeMenu} className="hover:text-white transition-colors">Log in</Link>
              <Button 
                variant="primary" 
                className="w-full justify-center mt-2"
                onClick={handleScrollToPricing}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
