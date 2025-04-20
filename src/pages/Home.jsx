import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SearchIcon, MapPinIcon, BriefcaseIcon, BuildingIcon, UserIcon } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { EmployerLogin, SeekerLogin } = useAuth();

  const handleEmployerLogin = () => {
    EmployerLogin();
    navigate('/dashboard');
  };

  const handleJobSeekerLogin = () => {
    SeekerLogin();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-secondary-600 mb-8">
          Connect with top employers and discover opportunities that match your skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <BuildingIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">For Employers</h2>
          <p className="text-secondary-600 mb-6">
            Post job openings and find the perfect candidates for your company.
          </p>
          <button
            onClick={handleEmployerLogin}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Continue as Employer
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <UserIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">For Job Seekers</h2>
          <p className="text-secondary-600 mb-6">
            Browse opportunities and find your next career move.
          </p>
          <button
            onClick={handleJobSeekerLogin}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Continue as Job Seeker
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;