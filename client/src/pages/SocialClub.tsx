import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';

const SocialClub = () => {
  const events = [
    {
      id: 1,
      title: "Episode 1: Brunch & Connect",
      date: "February 15, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "The Grand Ballroom, Los Angeles",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      description: "Join us for an exclusive brunch experience featuring live music, networking opportunities, and gourmet cuisine.",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Episode 2: The Empire Ball",
      date: "March 20, 2024",
      time: "7:00 PM - 12:00 AM",
      location: "Empire Hall, Beverly Hills",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      description: "An elegant evening of music, dancing, and celebration with performances by our top artists.",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Episode 3: Summer Vibes Festival",
      date: "Coming Soon",
      time: "TBA",
      location: "To Be Announced",
      attendees: 500,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      description: "Get ready for the biggest music festival of the summer featuring multiple stages and exclusive performances.",
      status: "Coming Soon"
    }
  ];

  const benefits = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Exclusive Access",
      description: "Get priority access to all BJA Record Empire events and meet-and-greets with artists"
    },
    {
      icon: <FaCalendar className="text-3xl" />,
      title: "Early Bird Tickets",
      description: "Be the first to know about upcoming events and secure your tickets before general release"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "VIP Experiences",
      description: "Enjoy premium seating, backstage access, and exclusive merchandise at our events"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Member Events",
      description: "Attend members-only gatherings, listening parties, and intimate acoustic sessions"
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
            BJA Social Club
          </h1>
          <p className="text-gray-400 text-lg font-wellston max-w-2xl mx-auto">
            Join our exclusive community and experience unforgettable events, connect with fellow music lovers, and get closer to your favorite artists
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-glass text-white text-center mb-12">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-ash-light rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-bronze mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-glass text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-wellston">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-glass text-white text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-ash-light rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-sans font-bold ${
                      event.status === 'Upcoming' 
                        ? 'bg-bronze text-black' 
                        : 'bg-gray-600 text-white'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-glass text-white mb-3 group-hover:text-bronze transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 font-wellston mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400 font-sans mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-bronze" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-bronze" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-bronze" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-bronze" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>
                  
                  <Link
                    to={event.status === 'Upcoming' ? '/tickets' : '/coming-soon'}
                    className="block w-full text-center px-6 py-3 rounded-full bg-bronze text-black font-sans font-bold hover:bg-white transition-colors"
                  >
                    {event.status === 'Upcoming' ? 'Get Tickets' : 'Notify Me'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-glass text-white text-center mb-12">
            Event Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
              "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400",
              "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
              "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400",
              "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
              "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-sans">View</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              View Full Gallery
            </Link>
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-bronze/10 to-transparent rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-glass text-white mb-4">
            Ready to Join the Club?
          </h3>
          <p className="text-gray-400 font-wellston mb-8 max-w-2xl mx-auto">
            Become a member today and unlock exclusive access to all our events, meet your favorite artists, and be part of the BJA Record Empire family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="px-8 py-4 rounded-full bg-bronze text-black font-sans font-bold hover:bg-white transition-colors"
            >
              Become a Member
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialClub;
