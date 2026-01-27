import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaSpotify, FaYoutube, FaPlay } from 'react-icons/fa';

const ArtistProfile = () => {
  const { artistId } = useParams<{ artistId: string }>();

  const artistsData: Record<string, any> = {
    'daimond-datch': {
      name: 'Daimond Datch',
      genre: 'Hip Hop / Rap',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600',
      bio: 'Daimond Datch is a rising star in the hip-hop scene, known for his unique blend of melodic flows and hard-hitting lyrics. Born and raised in the streets, his music reflects the raw reality of urban life while offering hope and inspiration to his listeners. With a distinctive voice and unmatched lyrical prowess, Daimond has quickly become one of the most talked-about artists in the game.',
      fullBio: 'Starting his career at the age of 16, Daimond Datch has evolved from underground mixtapes to chart-topping hits. His debut album "Diamond in the Rough" went platinum within six months, establishing him as a force to be reckoned with. His sophomore effort "Pressure Makes Diamonds" showcased his growth as an artist, blending trap beats with introspective storytelling. Known for his energetic live performances and authentic connection with fans, Daimond continues to push boundaries and redefine what it means to be a hip-hop artist in the modern era.',
      albums: [
        { title: 'Pressure Makes Diamonds', year: 2023, cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400' },
        { title: 'Diamond in the Rough', year: 2022, cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400' },
        { title: 'Street Poetry', year: 2021, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' }
      ],
      topTracks: [
        { title: 'Shine Bright', plays: '5.2M', duration: '3:45' },
        { title: 'No Pressure', plays: '4.8M', duration: '4:12' },
        { title: 'Street Dreams', plays: '3.9M', duration: '3:28' },
        { title: 'Diamond Life', plays: '3.5M', duration: '4:01' },
        { title: 'Rise Up', plays: '2.8M', duration: '3:52' }
      ],
      stats: {
        albums: 3,
        singles: 12,
        followers: '250K+',
        monthlyListeners: '1.2M'
      },
      socialLinks: {
        instagram: '#',
        twitter: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    'da-wayne': {
      name: 'Da Wayne',
      genre: 'R&B / Soul',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600',
      bio: 'Da Wayne brings smooth vocals and soulful melodies to every track he touches. His music is a perfect blend of classic R&B sensibilities and modern production, creating a sound that resonates across generations. With influences ranging from Marvin Gaye to Frank Ocean, Da Wayne has carved out his own lane in contemporary R&B.',
      fullBio: 'Da Wayne\'s journey into music began in church choirs, where he developed his powerful vocal range and emotional delivery. After years of honing his craft, he released his debut EP "Midnight Confessions" which caught the attention of BJA Record Empire. His ability to convey deep emotion through his voice has made him a favorite among R&B enthusiasts. Whether performing intimate ballads or upbeat grooves, Da Wayne\'s authenticity shines through. His latest album "Soul Searching" has been praised by critics for its vulnerability and sonic innovation, cementing his place as one of R&B\'s most promising talents.',
      albums: [
        { title: 'Soul Searching', year: 2023, cover: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400' },
        { title: 'Midnight Confessions', year: 2022, cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400' }
      ],
      topTracks: [
        { title: 'Midnight Love', plays: '6.1M', duration: '4:23' },
        { title: 'Soul Ties', plays: '5.3M', duration: '3:56' },
        { title: 'Better Days', plays: '4.7M', duration: '4:45' },
        { title: 'Confessions', plays: '4.2M', duration: '3:38' },
        { title: 'Smooth Operator', plays: '3.8M', duration: '4:12' }
      ],
      stats: {
        albums: 2,
        singles: 15,
        followers: '180K+',
        monthlyListeners: '950K'
      },
      socialLinks: {
        instagram: '#',
        twitter: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    'lon-ne': {
      name: 'Lon Ne',
      genre: 'Afrobeats / Pop',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600',
      bio: 'Lon Ne is bringing infectious Afrobeats rhythms to the global stage. With captivating performances and an undeniable stage presence, he has become a force in the Afrobeats movement. His music celebrates African culture while incorporating modern pop sensibilities, creating a sound that transcends borders.',
      fullBio: 'Born with rhythm in his blood, Lon Ne grew up surrounded by the rich musical traditions of West Africa. His unique ability to blend traditional Afrobeats with contemporary pop and dancehall has earned him a devoted international fanbase. After his breakout single "Lagos Nights" went viral, Lon Ne signed with BJA Record Empire and hasn\'t looked back. His energetic performances have graced stages from Lagos to London, and his music videos have garnered millions of views. With four albums under his belt and collaborations with major international artists, Lon Ne is at the forefront of bringing Afrobeats to mainstream audiences worldwide.',
      albums: [
        { title: 'African Giant', year: 2023, cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400' },
        { title: 'Rhythm & Vibes', year: 2022, cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400' },
        { title: 'Lagos Nights', year: 2021, cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' },
        { title: 'First Wave', year: 2020, cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400' }
      ],
      topTracks: [
        { title: 'Lagos Nights', plays: '8.5M', duration: '3:34' },
        { title: 'Dance With Me', plays: '7.2M', duration: '3:48' },
        { title: 'African Queen', plays: '6.8M', duration: '4:15' },
        { title: 'Vibes On Vibes', plays: '5.9M', duration: '3:22' },
        { title: 'Celebration', plays: '5.4M', duration: '3:56' }
      ],
      stats: {
        albums: 4,
        singles: 20,
        followers: '320K+',
        monthlyListeners: '1.8M'
      },
      socialLinks: {
        instagram: '#',
        twitter: '#',
        spotify: '#',
        youtube: '#'
      }
    }
  };

  const artist = artistsData[artistId || ''];

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-white pt-28 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-glass text-white mb-4">Artist Not Found</h1>
          <Link to="/artists" className="text-bronze hover:text-white transition-colors font-sans">
            Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={artist.coverImage}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-bronze font-sans text-sm mb-2">ARTIST</p>
              <h1 className="text-5xl md:text-7xl font-glass text-white mb-4">
                {artist.name}
              </h1>
              <p className="text-xl text-gray-300 font-wellston mb-6">{artist.genre}</p>
              <div className="flex flex-wrap gap-6 text-sm font-sans">
                <div>
                  <span className="text-white font-bold">{artist.stats.monthlyListeners}</span> Monthly Listeners
                </div>
                <div>
                  <span className="text-white font-bold">{artist.stats.followers}</span> Followers
                </div>
                <div>
                  <span className="text-white font-bold">{artist.stats.albums}</span> Albums
                </div>
                <div>
                  <span className="text-white font-bold">{artist.stats.singles}</span> Singles
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-glass text-white mb-6">About</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-400 font-wellston leading-relaxed mb-4">
                {artist.bio}
              </p>
              <p className="text-gray-400 font-wellston leading-relaxed">
                {artist.fullBio}
              </p>
            </div>
            <div className="bg-ash-light rounded-lg p-6">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-xl font-glass text-white mb-4">Follow {artist.name}</h3>
              <div className="flex gap-4">
                <a href={artist.socialLinks.instagram} className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all">
                  <FaInstagram className="text-xl" />
                </a>
                <a href={artist.socialLinks.twitter} className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all">
                  <FaTwitter className="text-xl" />
                </a>
                <a href={artist.socialLinks.spotify} className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all">
                  <FaSpotify className="text-xl" />
                </a>
                <a href={artist.socialLinks.youtube} className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all">
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-glass text-white mb-6">Popular Tracks</h2>
          <div className="bg-ash-light rounded-lg p-6">
            {artist.topTracks.map((track: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-800 last:border-b-0 hover:bg-black/30 transition-colors px-4 rounded group cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-gray-400 font-sans w-6">{index + 1}</span>
                  <button className="w-10 h-10 rounded-full bg-bronze flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlay className="text-black text-sm ml-1" />
                  </button>
                  <div>
                    <h4 className="text-white font-sans font-bold">{track.title}</h4>
                    <p className="text-gray-400 text-sm font-wellston">{artist.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-400 font-sans text-sm">{track.plays} plays</span>
                  <span className="text-gray-400 font-sans text-sm">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Discography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-glass text-white mb-6">Discography</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artist.albums.map((album: any, index: number) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-14 h-14 rounded-full bg-bronze flex items-center justify-center">
                      <FaPlay className="text-black text-lg ml-1" />
                    </button>
                  </div>
                </div>
                <h4 className="text-white font-sans font-bold mb-1">{album.title}</h4>
                <p className="text-gray-400 text-sm font-wellston">{album.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back to Artists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/artists"
            className="inline-block px-8 py-4 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
          >
            View All Artists
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtistProfile;
