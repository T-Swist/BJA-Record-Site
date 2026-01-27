import { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';
import { 
  FaHome, 
  FaUsers, 
  FaMusic, 
  FaNewspaper, 
  FaBlog, 
  FaEnvelope, 
  FaMailBulk, 
  FaCalendarAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaArrowLeft
} from 'react-icons/fa';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { admin } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/bja-control-panel');
  };

  const menuItems = [
    { path: '/bja-control-panel/dashboard', icon: FaHome, label: 'Dashboard' },
    { path: '/bja-control-panel/artists', icon: FaUsers, label: 'Artists' },
    { path: '/bja-control-panel/projects', icon: FaMusic, label: 'Projects' },
    { path: '/bja-control-panel/blog', icon: FaBlog, label: 'Blog' },
    { path: '/bja-control-panel/news', icon: FaNewspaper, label: 'News' },
    { path: '/bja-control-panel/contacts', icon: FaEnvelope, label: 'Contacts' },
    { path: '/bja-control-panel/newsletter', icon: FaMailBulk, label: 'Newsletter' },
    { path: '/bja-control-panel/events', icon: FaCalendarAlt, label: 'Events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-black border-r border-gray-800 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {sidebarOpen && (
            <h1 className="text-bronze font-display text-xl font-bold">BJA Admin</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 mb-1 transition-colors ${
                  isActive(item.path)
                    ? 'bg-bronze/20 text-bronze border-r-4 border-bronze'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {sidebarOpen && <span className="ml-3 font-sans">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Back to Public Site */}
        <div className="border-t border-gray-800 p-4">
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-gray-400 hover:text-bronze hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FaArrowLeft size={18} className="flex-shrink-0" />
            {sidebarOpen && <span className="ml-3 font-sans">Back to Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <FaBars size={20} />
            </button>
            <h2 className="text-xl font-sans text-white">
              {menuItems.find((item) => isActive(item.path))?.label || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-400">Welcome back,</p>
              <p className="text-white font-sans font-semibold">{admin?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-sans"
            >
              <FaSignOutAlt />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
