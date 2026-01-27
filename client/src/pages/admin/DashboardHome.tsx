import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaMusic, 
  FaBlog, 
  FaEnvelope, 
  FaMailBulk, 
  FaCalendarAlt,
  FaArrowRight,
  FaChartLine
} from 'react-icons/fa';

const DashboardHome = () => {
  const stats = [
    { label: 'Total Artists', value: '3', icon: FaUsers, color: 'bg-blue-500', link: '/bja-control-panel/artists' },
    { label: 'Projects', value: '12', icon: FaMusic, color: 'bg-purple-500', link: '/bja-control-panel/projects' },
    { label: 'Blog Posts', value: '24', icon: FaBlog, color: 'bg-green-500', link: '/bja-control-panel/blog' },
    { label: 'Contacts', value: '45', icon: FaEnvelope, color: 'bg-yellow-500', link: '/bja-control-panel/contacts' },
    { label: 'Subscribers', value: '1.2K', icon: FaMailBulk, color: 'bg-pink-500', link: '/bja-control-panel/newsletter' },
    { label: 'Events', value: '8', icon: FaCalendarAlt, color: 'bg-indigo-500', link: '/bja-control-panel/events' },
  ];

  const quickActions = [
    { label: 'Manage Artists', icon: FaUsers, link: '/bja-control-panel/artists', color: 'bronze' },
    { label: 'Add Blog Post', icon: FaBlog, link: '/bja-control-panel/blog', color: 'bronze' },
    { label: 'View Contacts', icon: FaEnvelope, link: '/bja-control-panel/contacts', color: 'bronze' },
    { label: 'Create Event', icon: FaCalendarAlt, link: '/bja-control-panel/events', color: 'bronze' },
  ];

  const recentActivity = [
    { action: 'New contact form submission', time: '2 hours ago', type: 'contact' },
    { action: 'Newsletter subscription', time: '5 hours ago', type: 'newsletter' },
    { action: 'Blog post published', time: '1 day ago', type: 'blog' },
    { action: 'Artist profile updated', time: '2 days ago', type: 'artist' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-bronze to-amber-600 rounded-xl p-8 text-black">
        <h1 className="text-3xl font-display font-bold mb-2">Welcome to BJA Admin Dashboard</h1>
        <p className="text-black/80 font-sans">Manage your record label's content and operations from here.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              to={stat.link}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-bronze transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <FaArrowRight className="text-gray-600 group-hover:text-bronze transition-colors" />
              </div>
              <p className="text-gray-400 text-sm font-sans mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-display font-bold text-white mb-4 flex items-center">
            <FaChartLine className="mr-2 text-bronze" />
            Quick Actions
          </h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link
                  key={index}
                  to={action.link}
                  className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-bronze" size={20} />
                    <span className="text-white font-sans">{action.label}</span>
                  </div>
                  <FaArrowRight className="text-gray-600 group-hover:text-bronze transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-display font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-700 last:border-0">
                <div className="w-2 h-2 bg-bronze rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-white font-sans text-sm">{activity.action}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-display font-bold text-white mb-4">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-sans mb-2">Database Status</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-white font-sans font-semibold">Connected</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm font-sans mb-2">API Status</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-white font-sans font-semibold">Operational</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm font-sans mb-2">Storage</p>
            <p className="text-white font-sans font-semibold">45% Used</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
