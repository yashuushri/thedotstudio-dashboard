import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Achieve } from './components/Achieve';
import { Pricing } from './components/Pricing';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { ScrollToTop } from './components/ScrollToTop';
import { CaseStudies } from './components/CaseStudies';
import { Blog } from './components/Blog';
import { Docs } from './components/Docs';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { Cookies } from './components/Cookies';
import { AUP } from './components/AUP';
import { Login } from './components/Login';
import CustomizePlan from './pages/CustomizePlan';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import Tools from './pages/Tools';
import Academy from './pages/Academy';
import RefundPolicy from './pages/RefundPolicy';
import Dashboard from './pages/Dashboard';
import Demo from './pages/Demo';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideNavAndFooter = ['/login', '/customize', '/checkout', '/success', '/dashboard'].includes(location.pathname);

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-white flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <div className="flex-grow">
        {children}
      </div>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <SocialProof />
              <Achieve />
              <Features />
              <Pricing />
              <CtaSection />
            </main>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/acceptable-use" element={<AUP />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customize" element={<CustomizePlan />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
