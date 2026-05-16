import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <footer style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} InsuranMan | 24071A05H4 | {time.toLocaleTimeString()} | Your Security, Our Priority.</p>
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}>Support</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
