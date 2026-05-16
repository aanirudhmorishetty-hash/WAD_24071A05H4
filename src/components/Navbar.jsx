import { Link, useLocation } from 'react-router-dom';
import { Shield, User, LayoutDashboard, FileText, CreditCard, AlertCircle, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Policies', path: '/policies', icon: FileText },
    { name: 'Payments', path: '/payments', icon: CreditCard },
    { name: 'Claims', path: '/claims', icon: AlertCircle },
  ];

  return (
    <nav className="glass" style={{ margin: '16px', padding: '12px 24px', position: 'sticky', top: '16px', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>
        <div style={{ background: 'var(--accent)', padding: '6px', borderRadius: '8px' }}>
          <Shield size={24} color="white" />
        </div>
        <span>InsuranMan</span>
      </Link>

      {!isAuthPage && (
        <div style={{ display: 'flex', gap: '8px' }}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'var(--transition)',
                  background: isActive ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
                }}
                onMouseOver={(e) => { if(!isActive) e.currentTarget.style.color = 'var(--text-main)'; }}
                onMouseOut={(e) => { if(!isActive) e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <Icon size={18} />
                <span className="nav-text">{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}

      <div style={{ display: 'flex', gap: '12px' }}>
        {isAuthPage ? (
          <Link to="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>Home</Link>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary" style={{ textDecoration: 'none', padding: '8px 16px' }}>
              <User size={18} />
              Login
            </Link>
            <Link to="/register" className="btn btn-primary" style={{ textDecoration: 'none', padding: '8px 16px' }}>Join Now</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
