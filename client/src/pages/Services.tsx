import { motion } from 'framer-motion';

const services = [
  {
    title: 'Artist Development',
    description: 'Comprehensive artist development programs including vocal coaching, performance training, and career guidance',
    icon: '🎤'
  },
  {
    title: 'Music Production',
    description: 'Professional recording, mixing, and mastering services in our state-of-the-art studios',
    icon: '🎧'
  },
  {
    title: 'Distribution & Marketing',
    description: 'Global music distribution and strategic marketing campaigns to reach your audience',
    icon: '📀'
  },
  {
    title: 'Publishing & Licensing',
    description: 'Music publishing administration and licensing opportunities for maximum exposure',
    icon: '📝'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-ash pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display text-bronze mb-12 text-center"
        >
          Our Services
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-white/80 font-wellston text-lg">
            BJA Record Empire offers comprehensive services to nurture talent and create successful music careers. From artist development to global distribution, we provide the support and expertise needed to thrive in the music industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-ash/50 backdrop-blur-md rounded-lg p-8 hover:bg-ash-light transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display text-bronze-light mb-4">{service.title}</h3>
              <p className="text-white/80 font-sans">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-auburn text-black rounded-full font-sans hover:bg-bronze hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-display text-bronze-light mb-6">Ready to Launch Your Music Career?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-auburn text-black rounded-full font-sans text-lg hover:bg-bronze hover:text-white transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
