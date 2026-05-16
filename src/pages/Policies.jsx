import { motion } from 'framer-motion';
import { FileText, Shield, MapPin, Calendar, DollarSign, Download, ExternalLink } from 'lucide-react';

const Policies = () => {
  const policies = [
    {
      title: 'Platinum Health Plus',
      provider: 'SafeGuard Life',
      coverage: '$1,000,000',
      premium: '$120 / month',
      nextPayment: 'Oct 12, 2026',
      status: 'Active',
      benefits: ['Global Coverage', 'Hospital Stays', 'Dental & Vision']
    },
    {
      title: 'SafeDrive Auto Insure',
      provider: 'RoadRunner Co',
      coverage: '$500,000',
      premium: '$85 / month',
      nextPayment: 'Dec 05, 2026',
      status: 'Active',
      benefits: ['Collision', 'Liability', '24/7 Roadside']
    },
    {
      title: 'HomeGuard Premium',
      provider: 'Urban Shield',
      coverage: '$2,500,000',
      premium: '$210 / month',
      nextPayment: 'Jan 20, 2027',
      status: 'In Review',
      benefits: ['Fire & Theft', 'Natural Disasters', 'Valuables']
    }
  ];

  return (
    <div className="section" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Your Policies</h2>
            <p style={{ color: 'var(--text-muted)' }}>Detailed overview of all your active and pending coverages.</p>
          </div>
          <button className="btn btn-primary">Find New Policy</button>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {policies.map((policy, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass" 
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}>
                  <Shield size={28} />
                </div>
                <div style={{ padding: '4px 12px', borderRadius: '20px', background: policy.status === 'Active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: policy.status === 'Active' ? '#10b981' : '#f59e0b', fontSize: '0.8rem', fontWeight: 600 }}>
                  {policy.status}
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>{policy.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>Provided by {policy.provider}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Coverage Amount</p>
                  <p style={{ fontWeight: 600 }}>{policy.coverage}</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Monthly Premium</p>
                  <p style={{ fontWeight: 600 }}>{policy.premium}</p>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px' }}>Key Benefits:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {policy.benefits.map((benefit, j) => (
                    <span key={j} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '4px' }}>{benefit}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
                <button className="btn btn-secondary" style={{ flex: 1, fontSize: '0.85rem' }}>
                  <Download size={16} /> Documents
                </button>
                <button className="btn btn-secondary" style={{ flex: 1, fontSize: '0.85rem' }}>
                  <ExternalLink size={16} /> Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policies;
