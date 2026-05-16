import { motion } from 'framer-motion';
import { Shield, Activity, CreditCard, Clock, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Policies', value: '3', icon: Shield, color: '#06b6d4' },
    { label: 'Pending Claims', value: '1', icon: Clock, color: '#f59e0b' },
    { label: 'Total Premiums', value: '$1,240', icon: CreditCard, color: '#10b981' },
    { label: 'Safety Score', value: '98%', icon: Activity, color: '#8b5cf6' },
  ];

  return (
    <div className="section" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Welcome Back, Alex</h2>
          <p style={{ color: 'var(--text-muted)' }}>Here is what's happening with your insurance today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: '48px' }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass" 
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <div style={{ background: `${stat.color}20`, padding: '12px', borderRadius: '12px', color: stat.color }}>
                <stat.icon size={28} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass" 
            style={{ padding: '32px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Active Policies</h3>
              <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>View All</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Platinum Health Plus', id: 'H-9021', status: 'Active', renewal: 'Oct 12, 2026', color: '#10b981' },
                { title: 'SafeDrive Auto Insure', id: 'V-5521', status: 'Active', renewal: 'Dec 05, 2026', color: '#10b981' },
                { title: 'HomeGuard Premium', id: 'P-1120', status: 'Processing', renewal: 'Jan 20, 2027', color: '#f59e0b' },
              ].map((policy, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: policy.color }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{policy.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {policy.id}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.9rem', color: policy.color, fontWeight: 600 }}>{policy.status}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Renews {policy.renewal}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass" 
            style={{ padding: '32px' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Market Insights</h3>
            <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '20px', borderRadius: '16px', border: '1px dashed var(--accent)', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--accent)' }}>
                <TrendingUp size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Smart Tip</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bundling your Auto and Home insurance could save you up to **15%** on annual premiums.</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Upgrade Policy</button>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Download Reports</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
