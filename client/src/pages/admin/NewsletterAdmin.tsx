import { useState } from 'react';
import { FaTrash, FaDownload, FaUserCheck, FaUserTimes } from 'react-icons/fa';

const NewsletterAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - will be replaced with API calls
  const subscribers = [
    {
      id: '1',
      email: 'subscriber1@example.com',
      isActive: true,
      subscribedAt: '2024-01-15 10:30'
    },
    {
      id: '2',
      email: 'subscriber2@example.com',
      isActive: true,
      subscribedAt: '2024-01-14 14:20'
    },
    {
      id: '3',
      email: 'subscriber3@example.com',
      isActive: false,
      subscribedAt: '2024-01-10 09:15'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Newsletter Subscribers</h1>
          <p className="text-gray-400 font-sans mt-1">Manage your newsletter subscriber list</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-bronze text-black rounded-lg hover:bg-bronze/90 transition-colors font-sans font-semibold">
          <FaDownload />
          <span>Export List</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Subscribers</p>
          <p className="text-2xl font-bold text-white mt-1">1,234</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Active</p>
          <p className="text-2xl font-bold text-green-500 mt-1">1,180</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Inactive</p>
          <p className="text-2xl font-bold text-red-500 mt-1">54</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">This Month</p>
          <p className="text-2xl font-bold text-blue-500 mt-1">+87</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
          />
          <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white outline-none focus:border-bronze transition-colors font-sans">
            <option value="">All Subscribers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Subscribed Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-sans">{subscriber.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-sans flex items-center w-fit space-x-1 ${
                        subscriber.isActive
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {subscriber.isActive ? <FaUserCheck /> : <FaUserTimes />}
                      <span>{subscriber.isActive ? 'Active' : 'Inactive'}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-sans text-sm">
                    {subscriber.subscribedAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Growth Chart Placeholder */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-display font-bold text-white mb-4">Subscriber Growth</h2>
        <div className="h-64 flex items-center justify-center text-gray-500 font-sans">
          Chart will be displayed here
        </div>
      </div>
    </div>
  );
};

export default NewsletterAdmin;
