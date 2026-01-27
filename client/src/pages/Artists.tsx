import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa';

const Artists = () => {
  const artists = [
    {
      id: 'daimond-datch',
      name: 'Daimond Datch',
      genre: 'Hip Hop / Rap',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      bio: 'Rising star in the hip-hop scene with a unique blend of melodic flows and hard-hitting lyrics.',
      albums: 3,
      singles: 12,
      followers: '250K+'
    },
    {
      id: 'da-wayne',
      name: 'Da Wayne',
      genre: 'R&B / Soul',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      bio: 'Smooth vocals and soulful melodies define this talented artist who brings emotion to every track.',
      albums: 2,
      singles: 15,
      followers: '180K+'
    },
    {
      id: 'lon-ne',
      name: 'Lon Ne',
      genre: 'Afrobeats / Pop',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      bio: 'Infectious rhythms and captivating performances make Lon Ne a force in the Afrobeats movement.',
      albums: 4,
      singles: 20,
      followers: '320K+'
    }
  ];

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
            Our Artists
          </h1>
          <p className="text-gray-400 text-lg font-wellston max-w-2xl mx-auto">
            Meet the talented artists shaping the sound of BJA Record Empire
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link to={`/artists/${artist.id}`}>
                <div className="group relative overflow-hidden rounded-lg bg-ash-light hover:transform hover:scale-105 transition-all duration-300">
                  {/* Artist Image */}
                  <div className="relative overflow-hidden h-96">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Artist Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-glass text-white mb-2 group-hover:text-bronze transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-bronze font-sans text-sm mb-3">
                        {artist.genre}
                      </p>
                      <p className="text-gray-300 font-wellston text-sm line-clamp-2 mb-4">
                        {artist.bio}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex gap-6 text-sm font-sans text-gray-400">
                        <div>
                          <span className="text-white font-bold">{artist.albums}</span> Albums
                        </div>
                        <div>
                          <span className="text-white font-bold">{artist.singles}</span> Singles
                        </div>
                        <div>
                          <span className="text-white font-bold">{artist.followers}</span> Fans
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Profile Button */}
                  <div className="p-4 bg-ash-light">
                    <button className="w-full px-6 py-3 rounded-full bg-bronze text-black font-sans font-bold group-hover:bg-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-bronze/10 to-transparent rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-glass text-white mb-4">
            Want to Join Our Roster?
          </h3>
          <p className="text-gray-400 font-wellston mb-8 max-w-2xl mx-auto">
            We're always looking for talented artists to join the BJA Record Empire family. Submit your demo and let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full bg-bronze text-black font-sans font-bold hover:bg-white transition-colors"
          >
            Submit Your Demo
          </Link>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-glass text-white mb-6">
            Follow Our Artists
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-ash-light flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-ash-light flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-ash-light flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
            >
              <FaSpotify className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-ash-light flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artists;
