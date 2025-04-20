import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

  function PostJob() {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const existJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const newJob = {id: Date.now(), ...jobData};
    const updatedJobs = [...existJobs, newJob];
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    alert('Job Posted!');
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Post a New Job</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salary Range
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.salary}
                onChange={handleChange}
                placeholder="e.g. $80,000 - $100,000"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <select
                name="type"
                id="type"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.type}
                onChange={handleChange}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={6}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                value={jobData.description}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PostJob