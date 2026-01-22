import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { admin } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/bja-control-panel');
  };

  return (
    <div className="min-h-screen bg-ash-dark">
      <nav className="bg-ash-light border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">BJA Record Empire - Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {admin?.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate('/bja-control-panel/artists')}
            className="bg-ash-light p-6 rounded-lg shadow-lg cursor-pointer hover:bg-ash-light/80 transition-colors border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Artists</h2>
            <p className="text-gray-400">Manage artists and their profiles</p>
          </div>

          <div
            onClick={() => navigate('/bja-control-panel/projects')}
            className="bg-ash-light p-6 rounded-lg shadow-lg cursor-pointer hover:bg-ash-light/80 transition-colors border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
            <p className="text-gray-400">Manage music projects and releases</p>
          </div>

          <div
            onClick={() => navigate('/bja-control-panel/news')}
            className="bg-ash-light p-6 rounded-lg shadow-lg cursor-pointer hover:bg-ash-light/80 transition-colors border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-2">News</h2>
            <p className="text-gray-400">Manage news and announcements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
