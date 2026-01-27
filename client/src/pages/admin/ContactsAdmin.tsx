import { useState } from 'react';
import { FaEnvelope, FaTrash, FaCheck, FaEye } from 'react-icons/fa';

const ContactsAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - will be replaced with API calls
  const contacts = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Collaboration Inquiry',
      message: 'I would like to discuss a potential collaboration...',
      status: 'new',
      createdAt: '2024-01-20 14:30'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Booking Request',
      message: 'Interested in booking one of your artists...',
      status: 'read',
      createdAt: '2024-01-19 10:15'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      subject: 'General Question',
      message: 'I have a question about your services...',
      status: 'replied',
      createdAt: '2024-01-18 16:45'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400';
      case 'read':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'replied':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Contact Messages</h1>
          <p className="text-gray-400 font-sans mt-1">Manage contact form submissions</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Messages</p>
          <p className="text-2xl font-bold text-white mt-1">45</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">New</p>
          <p className="text-2xl font-bold text-blue-500 mt-1">12</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Read</p>
          <p className="text-2xl font-bold text-yellow-500 mt-1">18</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Replied</p>
          <p className="text-2xl font-bold text-green-500 mt-1">15</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
          />
          <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white outline-none focus:border-bronze transition-colors font-sans">
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-sans font-medium">{contact.name}</p>
                    <p className="text-gray-400 text-sm font-sans flex items-center mt-1">
                      <FaEnvelope className="mr-2" size={12} />
                      {contact.email}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white font-sans">{contact.subject}</p>
                    <p className="text-gray-400 text-sm font-sans mt-1 truncate max-w-xs">
                      {contact.message}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-sans ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-sans text-sm">{contact.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                        <FaEye />
                      </button>
                      <button className="p-2 text-green-400 hover:bg-green-500/20 rounded-lg transition-colors">
                        <FaCheck />
                      </button>
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
    </div>
  );
};

export default ContactsAdmin;
