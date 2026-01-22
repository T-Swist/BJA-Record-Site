import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

const Projects = () => {
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
            <div className="flex items-center space-x-8">
              <h1 
                onClick={() => navigate('/bja-control-panel/dashboard')}
                className="text-xl font-bold text-white cursor-pointer hover:text-gray-300"
              >
                BJA Record Empire
              </h1>
              <div className="flex space-x-4">
                <button
                  onClick={() => navigate('/bja-control-panel/artists')}
                  className="text-gray-400 hover:text-white"
                >
                  Artists
                </button>
                <button
                  onClick={() => navigate('/bja-control-panel/projects')}
                  className="text-white font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => navigate('/bja-control-panel/news')}
                  className="text-gray-400 hover:text-white"
                >
                  News
                </button>
              </div>
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Projects Management</h2>
          <button className="px-4 py-2 bg-white text-ash-dark rounded hover:bg-gray-100 transition-colors">
            Add New Project
          </button>
        </div>

        <div className="bg-ash-light rounded-lg shadow-lg p-6 border border-gray-700">
          <p className="text-gray-400 text-center py-8">
            Projects management interface will be implemented here.
            <br />
            Features: Create, Read, Update, Delete music projects and releases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
