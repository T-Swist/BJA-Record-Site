import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const Discography = () => {
  const [selectedArtist, setSelectedArtist] = useState<string>('all');

  const releases = [
    {
      id: 1,
      title: 'African Giant',
      artist: 'Lon Ne',
      artistId: 'lon-ne',
      type: 'Album',
      year: 2023,
      cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400',
      tracks: 14,
      duration: '52:34'
    },
    {
      id: 2,
      title: 'Pressure Makes Diamonds',
      artist: 'Daimond Datch',
      artistId: 'daimond-datch',
      type: 'Album',
      year: 2023,
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
      tracks: 12,
      duration: '45:23'
    },
    {
      id: 3,
      title: 'Soul Searching',
      artist: 'Da Wayne',
      artistId: 'da-wayne',
      type: 'Album',
      year: 2023,
      cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400',
      tracks: 10,
      duration: '41:18'
    },
    {
      id: 4,
      title: 'Rhythm & Vibes',
      artist: 'Lon Ne',
      artistId: 'lon-ne',
      type: 'Album',
      year: 2022,
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
      tracks: 13,
      duration: '48:56'
    },
    {
      id: 5,
      title: 'Diamond in the Rough',
      artist: 'Daimond Datch',
      artistId: 'daimond-datch',
      type: 'Album',
      year: 2022,
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
      tracks: 11,
      duration: '43:12'
    },
    {
      id: 6,
      title: 'Midnight Confessions',
      artist: 'Da Wayne',
      artistId: 'da-wayne',
      type: 'EP',
      year: 2022,
      cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
      tracks: 6,
      duration: '24:45'
    },
    {
      id: 7,
      title: 'Lagos Nights',
      artist: 'Lon Ne',
      artistId: 'lon-ne',
      type: 'Album',
      year: 2021,
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      tracks: 12,
      duration: '46:32'
    },
    {
      id: 8,
      title: 'Street Poetry',
      artist: 'Daimond Datch',
      artistId: 'daimond-datch',
      type: 'Album',
      year: 2021,
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      tracks: 10,
      duration: '38:54'
    },
    {
      id: 9,
      title: 'First Wave',
      artist: 'Lon Ne',
      artistId: 'lon-ne',
      type: 'Album',
      year: 2020,
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
      tracks: 11,
      duration: '42:18'
    }
  ];

  const filteredReleases = selectedArtist === 'all' 
    ? releases 
    : releases.filter(release => release.artistId === selectedArtist);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-glass text-white mb-6">
            Discography
          </h1>
          <p className="text-gray-400 text-lg font-wellston max-w-2xl mx-auto">
            Explore the complete collection of albums and EPs from BJA Record Empire artists
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedArtist('all')}
            className={`px-6 py-3 rounded-full font-sans transition-all duration-300 ${
              selectedArtist === 'all'
                ? 'bg-bronze text-black'
                : 'border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black'
            }`}
          >
            All Artists
          </button>
          <button
            onClick={() => setSelectedArtist('daimond-datch')}
            className={`px-6 py-3 rounded-full font-sans transition-all duration-300 ${
              selectedArtist === 'daimond-datch'
                ? 'bg-bronze text-black'
                : 'border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black'
            }`}
          >
            Daimond Datch
          </button>
          <button
            onClick={() => setSelectedArtist('da-wayne')}
            className={`px-6 py-3 rounded-full font-sans transition-all duration-300 ${
              selectedArtist === 'da-wayne'
                ? 'bg-bronze text-black'
                : 'border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black'
            }`}
          >
            Da Wayne
          </button>
          <button
            onClick={() => setSelectedArtist('lon-ne')}
            className={`px-6 py-3 rounded-full font-sans transition-all duration-300 ${
              selectedArtist === 'lon-ne'
                ? 'bg-bronze text-black'
                : 'border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black'
            }`}
          >
            Lon Ne
          </button>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-ash-light">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-bronze flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <FaPlay className="text-black text-xl ml-1" />
                  </button>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-bronze text-black text-xs font-sans font-bold">
                    {release.type}
                  </span>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-white font-sans font-bold mb-1 group-hover:text-bronze transition-colors line-clamp-1">
                  {release.title}
                </h3>
                <p className="text-gray-400 text-sm font-wellston mb-2">{release.artist}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-sans">
                  <span>{release.year}</span>
                  <span>•</span>
                  <span>{release.tracks} tracks</span>
                  <span>•</span>
                  <span>{release.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-bronze/10 to-transparent rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-glass text-white mb-4">
            Stream Our Music
          </h3>
          <p className="text-gray-400 font-wellston mb-8 max-w-2xl mx-auto">
            Listen to all BJA Record Empire releases on your favorite streaming platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-ash-light text-white hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              <FaSpotify className="text-2xl" />
              <span>Spotify</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-ash-light text-white hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              <FaApple className="text-2xl" />
              <span>Apple Music</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-ash-light text-white hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              <FaYoutube className="text-2xl" />
              <span>YouTube Music</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Discography;
