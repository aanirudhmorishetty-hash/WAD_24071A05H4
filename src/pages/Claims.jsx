import { motion } from 'framer-motion';
import { AlertCircle, Upload, Send, CheckCircle, Clock, XCircle, FileText } from 'lucide-react';

const Claims = () => {
  const recentClaims = [
    { id: 'CLM-7721', type: 'Medical', date: 'Aug 14, 2025', status: 'Approved', amount: '$450.00', color: '#10b981', icon: CheckCircle },
    { id: 'CLM-8832', type: 'Vehicle', date: 'Sep 22, 2025', status: 'Processing', amount: '$1,200.00', color: '#f59e0b', icon: Clock },
    { id: 'CLM-9910', type: 'Medical', date: 'Oct 01, 2025', status: 'Rejected', amount: '$75.00', color: '#ef4444', icon: XCircle },
  ];

  return (
    <div className="section" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Claims Center</h2>
          <p style={{ color: 'var(--text-muted)' }}>File new claims or track the status of existing ones.</p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
          {/* File a Claim */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass" 
            style={{ padding: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '12px', color: '#ef4444' }}>
                <AlertCircle size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>File New Claim</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Please provide accurate details for faster processing.</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Incident Type</label>
                <select>
                  <option>Accident / Collision</option>
                  <option>Medical Emergency</option>
                  <option>Home Damage</option>
                  <option>Theft / Burglary</option>
                  <option>Natural Disaster</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date of Incident</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Description of Event</label>
                <textarea rows="4" placeholder="Describe what happened in detail..."></textarea>
              </div>

              <div className="form-group">
                <label>Supporting Documents</label>
                <div style={{ border: '2px dashed var(--glass-border)', borderRadius: '12px', padding: '32px', textAlign: 'center', cursor: 'pointer', transition: 'var(--transition)' }} 
                     onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                     onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}>
                  <Upload size={32} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Drag and drop files or <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Browse</span></p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center', marginTop: '12px' }}>
                Submit Claim <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Recent Claims */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass" 
            style={{ padding: '32px' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Claim History</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentClaims.map((claim, i) => {
                const Icon = claim.icon;
                return (
                  <div key={i} className="glass-hover" style={{ padding: '20px', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid var(--glass-border)', transition: 'var(--transition)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ color: claim.color }}><Icon size={20} /></div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{claim.type} Claim</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {claim.id}</p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '1rem', fontWeight: 700 }}>{claim.amount}</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{claim.date}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ padding: '4px 10px', borderRadius: '20px', background: `${claim.color}15`, color: claim.color, fontSize: '0.75rem', fontWeight: 600 }}>
                        {claim.status}
                      </div>
                      <button style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Details <FileText size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Need assistance with a claim?</p>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Contact Adjuster</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
