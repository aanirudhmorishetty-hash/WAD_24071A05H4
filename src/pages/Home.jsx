import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="section" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              The Future of <br /> Insurance is Here.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
              Manage your security, automate your premiums, and file claims in seconds. Experience a seamless insurance ecosystem designed for the modern world.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link to="/register" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem', textDecoration: 'none' }}>
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn btn-secondary" style={{ padding: '14px 32px', fontSize: '1.1rem', textDecoration: 'none' }}>
                Member Login
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {[
            { icon: ShieldCheck, title: 'Total Protection', desc: 'Comprehensive coverage for your health, home, and vehicle with 24/7 support.' },
            { icon: Zap, title: 'Instant Approvals', desc: 'Our AI-driven system processes your claims and applications in real-time.' },
            { icon: Globe, title: 'Global Support', desc: 'Access your insurance benefits and support centers from anywhere in the world.' },
            { icon: Lock, title: 'Secure Vault', desc: 'Your data is protected with military-grade encryption and biometric security.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover" 
              style={{ padding: '32px', textAlign: 'center' }}
            >
              <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--accent)' }}>
                <feature.icon size={32} />
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
