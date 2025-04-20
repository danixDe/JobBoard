import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BriefcaseIcon } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BriefcaseIcon className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">JobBoard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/jobs" className="text-secondary-600 hover:text-primary-600">
              Browse Jobs
            </Link>
            {user ? (
              <>
                {user.type === 'employer' && (
                  <Link to="/post-job" className="text-secondary-600 hover:text-primary-600">
                    Post a Job
                  </Link>
                )}
                <Link to="/dashboard" className="text-secondary-600 hover:text-primary-600">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-secondary-600 hover:text-primary-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/" className="text-secondary-600 hover:text-primary-600">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;