import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Music Production in the Digital Age",
      excerpt: "Exploring how technology has transformed the way we create and consume music, from analog to digital.",
      author: "BJA Team",
      date: "January 15, 2024",
      category: "Music Production",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Behind the Scenes: Artist Spotlight Series",
      excerpt: "Get an exclusive look into the creative process of our talented artists and their journey to success.",
      author: "BJA Team",
      date: "January 10, 2024",
      category: "Artist Stories",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Business of Music: Industry Insights",
      excerpt: "Understanding the modern music industry landscape and how artists can navigate it successfully.",
      author: "BJA Team",
      date: "January 5, 2024",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Recording Studio Tips for Emerging Artists",
      excerpt: "Essential advice and techniques to make the most of your studio time and create professional recordings.",
      author: "BJA Team",
      date: "December 28, 2023",
      category: "Tips & Tricks",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Music Marketing in the Social Media Era",
      excerpt: "Strategies for building your brand and reaching audiences through digital platforms and social media.",
      author: "BJA Team",
      date: "December 20, 2023",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Upcoming Events and Releases",
      excerpt: "Stay updated with the latest happenings at BJA Record Empire and our exciting upcoming projects.",
      author: "BJA Team",
      date: "December 15, 2023",
      category: "News",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Music Production", "Artist Stories", "Industry News", "Tips & Tricks", "Marketing", "News"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-glass text-white mb-6">
            BJA Record Empire Blog
          </h1>
          <p className="text-gray-400 text-lg font-wellston max-w-2xl mx-auto">
            Insights, stories, and updates from the world of music production and our talented artists
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-ash-light rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-bronze text-black px-3 py-1 rounded-full text-xs font-sans font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4 font-sans">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-bronze" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser className="text-bronze" />
                    {post.author}
                  </span>
                </div>
                
                <h2 className="text-xl font-glass text-white mb-3 group-hover:text-bronze transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 font-wellston mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-sans">{post.readTime}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-bronze hover:gap-3 transition-all duration-300 font-sans"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-bronze/10 to-transparent rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-glass text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 font-wellston mb-6 max-w-2xl mx-auto">
            Get the latest updates, exclusive content, and behind-the-scenes insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-black/50 border border-bronze/30 text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
            />
            <button className="px-8 py-3 rounded-full bg-bronze text-black font-sans font-bold hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
