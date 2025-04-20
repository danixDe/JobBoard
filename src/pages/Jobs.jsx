import React, { useState } from 'react';
import { SearchIcon, MapPinIcon, FilterIcon } from 'lucide-react';

const dummyJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    posted: '3 days ago',
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'San Francisco, CA',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    posted: '1 week ago',
  },
];

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Jobs</h1>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="pl-10 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700">
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {dummyJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {job.location}
              </div>
              <div className="text-gray-600">
                {job.salary}
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-gray-500 text-sm">Posted {job.posted}</span>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;