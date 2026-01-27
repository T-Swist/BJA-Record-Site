import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

const BlogAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - will be replaced with API calls
  const blogPosts = [
    {
      id: '1',
      title: 'The Evolution of Hip Hop in 2024',
      category: 'Music Industry',
      author: 'Admin',
      status: 'published',
      publishedAt: '2024-01-15',
      views: 1234
    },
    {
      id: '2',
      title: 'Behind the Scenes: Recording Process',
      category: 'Studio Life',
      author: 'Admin',
      status: 'draft',
      publishedAt: null,
      views: 0
    },
    {
      id: '3',
      title: 'Artist Spotlight: Rising Stars',
      category: 'Artists',
      author: 'Admin',
      status: 'published',
      publishedAt: '2024-01-10',
      views: 856
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Blog Management</h1>
          <p className="text-gray-400 font-sans mt-1">Create and manage blog posts</p>
        </div>
        <button className="flex items-center space-x-2 px-6 py-3 bg-bronze text-black rounded-lg hover:bg-bronze/90 transition-colors font-sans font-semibold">
          <FaPlus />
          <span>New Post</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Posts</p>
          <p className="text-2xl font-bold text-white mt-1">24</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Published</p>
          <p className="text-2xl font-bold text-green-500 mt-1">18</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Drafts</p>
          <p className="text-2xl font-bold text-yellow-500 mt-1">6</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-sm font-sans">Total Views</p>
          <p className="text-2xl font-bold text-blue-500 mt-1">12.5K</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
          />
          <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white outline-none focus:border-bronze transition-colors font-sans">
            <option value="">All Categories</option>
            <option value="music">Music Industry</option>
            <option value="studio">Studio Life</option>
            <option value="artists">Artists</option>
          </select>
          <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white outline-none focus:border-bronze transition-colors font-sans">
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Published
                </th>
                <th className="px-6 py-4 text-left text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-4 text-right text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-sans font-medium">{post.title}</p>
                    <p className="text-gray-400 text-sm font-sans">by {post.author}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-sans">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-sans ${
                        post.status === 'published'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-sans text-sm">
                    {post.publishedAt || 'Not published'}
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-sans text-sm">{post.views}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                        {post.status === 'published' ? <FaEye /> : <FaEyeSlash />}
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
    </div>
  );
};

export default BlogAdmin;
