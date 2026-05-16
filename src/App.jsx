import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Payments from './pages/Payments';
import Claims from './pages/Claims';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="policies" element={<Policies />} />
          <Route path="payments" element={<Payments />} />
          <Route path="claims" element={<Claims />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
