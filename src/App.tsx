import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import PostJob from './pages/PostJob';
import  {AuthProvider}  from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post-job" element={<PostJob />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;