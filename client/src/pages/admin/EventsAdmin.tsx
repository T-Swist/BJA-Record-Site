import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaCalendarAlt } from 'react-icons/fa';

const EventsAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - will be replaced with API calls
  const events = [
    {
      id: '1',
      title: 'Summer Music Festival 2024',
      date: '2024-07-15',
      time: '18:00',
      location: 'Central Park, NYC',
      attendees: 250,
      status: 'upcoming',
      isPublished: true
    },
    {
      id: '2',
      title: 'Artist Meet & Greet',
      date: '2024-02-20',
      time: '19:00',
      location: 'BJA Studio',
      attendees: 50,
      status: 'upcoming',
      isPublished: true
    },
    {
      id: '3',
      title: 'Album Launch Party',
      date: '2024-01-10',
      time: '20:00',
      location: 'Downtown Venue',
      attendees: 180,
      status: 'completed',
      isPublished: false
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400';
      case 'ongoing':
        return 'bg-green-500/20 text-green-400';
      case 'completed':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Events Management</h1>
          <p className="text-gray-400 font-sans mt-1">Create and manage social club events</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-bronze text-black rounded-lg hover:bg-bronze/90 transition-colors font-sans font-semibold">
          <FaPlus />
          <span>New Event</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Events</p>
          <p className="text-2xl font-bold text-white mt-1">8</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Upcoming</p>
          <p className="text-2xl font-bold text-blue-500 mt-1">3</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Completed</p>
          <p className="text-2xl font-bold text-gray-400 mt-1">5</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Attendees</p>
          <p className="text-2xl font-bold text-green-500 mt-1">1,240</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
          />
          <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white outline-none focus:border-bronze transition-colors font-sans">
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Attendees
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-sans font-medium flex items-center">
                      <FaCalendarAlt className="mr-2 text-bronze" />
                      {event.title}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white font-sans text-sm">{event.date}</p>
                    <p className="text-gray-400 text-xs font-sans">{event.time}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-sans text-sm">{event.location}</td>
                  <td className="px-6 py-4 text-white font-sans text-sm">{event.attendees}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-sans ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                        {event.isPublished ? <FaEye /> : <FaEyeSlash />}
                      </button>
                      <button className="p-2 text-yellow-400 hover:bg-yellow-500/20 rounded-lg transition-colors">
                        <FaEdit />
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

      {/* Upcoming Events Calendar View */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-display font-bold text-white mb-4">Upcoming Events Calendar</h2>
        <div className="h-64 flex items-center justify-center text-gray-500 font-sans">
          Calendar view will be displayed here
        </div>
      </div>
    </div>
  );
};

export default EventsAdmin;
