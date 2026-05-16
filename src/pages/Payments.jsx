import { motion } from 'framer-motion';
import { CreditCard, Shield, ChevronRight, CheckCircle, Smartphone, Landmark } from 'lucide-react';

const Payments = () => {
  return (
    <div className="section" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Premium Payments</h2>
          <p style={{ color: 'var(--text-muted)' }}>Securely manage your installments and payment methods.</p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
          {/* Payment Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass" 
            style={{ padding: '40px' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '32px' }}>Make a Payment</h3>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <div style={{ flex: 1, padding: '20px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', border: '2px solid var(--accent)', textAlign: 'center', cursor: 'pointer' }}>
                <CreditCard size={24} color="var(--accent)" style={{ marginBottom: '8px' }} />
                <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Card</p>
              </div>
              <div style={{ flex: 1, padding: '20px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid var(--glass-border)', textAlign: 'center', cursor: 'pointer' }}>
                <Smartphone size={24} color="var(--text-muted)" style={{ marginBottom: '8px' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>UPI / Pay</p>
              </div>
              <div style={{ flex: 1, padding: '20px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid var(--glass-border)', textAlign: 'center', cursor: 'pointer' }}>
                <Landmark size={24} color="var(--text-muted)" style={{ marginBottom: '8px' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Net Banking</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Select Policy</label>
                <select>
                  <option>Platinum Health Plus - $120.00</option>
                  <option>SafeDrive Auto Insure - $85.00</option>
                  <option>HomeGuard Premium - $210.00</option>
                </select>
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Johnathan Doe" />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="•••• •••• •••• 4421" />
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM / YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="password" placeholder="•••" />
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginTop: '12px' }}>
                Complete Payment <ChevronRight size={20} />
              </button>
            </form>
          </motion.div>

          {/* Payment Summary & History */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass" 
              style={{ padding: '32px' }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Upcoming Dues</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Health Insurance', amount: '$120.00', date: 'Oct 12' },
                  { name: 'Auto Insurance', amount: '$85.00', date: 'Dec 05' },
                ].map((due, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: i === 0 ? '1px solid var(--glass-border)' : 'none' }}>
                    <div>
                      <p style={{ fontWeight: 600 }}>{due.name}</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Due on {due.date}</p>
                    </div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>{due.amount}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass" 
              style={{ padding: '32px' }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Security Guarantee</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--success)' }}><CheckCircle size={24} /></div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '4px' }}>PCI DSS Compliant</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Your payment info is encrypted and never stored on our servers.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
