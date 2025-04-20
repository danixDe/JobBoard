import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BriefcaseIcon, BuildingIcon } from 'lucide-react';

const dummyJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'San Francisco, CA',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
  },
];

 function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome, {user?.type === 'employer' ? 'Employer' : 'Job Seeker'}
            </h1>
            {user?.type === 'employer' && (
              <BuildingIcon className="h-8 w-8 text-primary-600" />
            )}
          </div>

          {user?.type === 'employer' ? (
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-gray-900">Your Posted Jobs</h2>
              <div className="grid gap-4">
                {dummyJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium">{job.title}</h3>
                    <p className="text-gray-600">{job.location}</p>
                    <p className="text-gray-600">{job.salary}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-gray-900">Recommended Jobs</h2>
              <div className="grid gap-4">
                {dummyJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:border-primary-500 transition-colors">
                    <h3 className="text-lg font-medium">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                    <p className="text-gray-600">{job.location}</p>
                    <p className="text-gray-600">{job.salary}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="inline-block bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                        {job.type}
                      </span>
                      <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Dashboard