import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key'); // Replace with your Stripe publishable key

const events = [
  {
    id: 1,
    title: 'BJA Empire Live Concert',
    date: 'July 15, 2024',
    price: 149.99,
    description: 'Experience an unforgettable night with our top artists performing their biggest hits',
    category: 'Concert',
    availability: 'Limited'
  },
  {
    id: 2,
    title: 'Artist Showcase & Networking',
    date: 'August 20, 2024',
    price: 299.99,
    description: 'Connect with industry professionals and discover emerging talent',
    category: 'Industry Event',
    availability: 'Available'
  },
  {
    id: 3,
    title: 'Album Release Party',
    date: 'September 5, 2024',
    price: 199.99,
    description: 'Celebrate our latest album release with exclusive performances and VIP access',
    category: 'Release Party',
    availability: 'Selling Fast'
  }
];

const Tickets = () => {
  const handlePurchase = async (eventId: number) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // In a real application, you would create a checkout session on your backend
      // and redirect to Stripe checkout. This is a placeholder implementation.
      console.log(`Processing purchase for event ${eventId}`);
      
      // Example checkout session creation (commented out as it needs backend implementation)
      // const session = await stripe.redirectToCheckout({
      //   lineItems: [{ price: 'price_id', quantity: 1 }],
      //   mode: 'payment',
      //   successUrl: window.location.origin + '/success',
      //   cancelUrl: window.location.origin + '/tickets',
      // });
    } catch (error) {
      console.error('Purchase failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-ash pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display text-bronze mb-12 text-center"
        >
          Concert Tickets
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-white/80 font-wellston text-lg">
            Join us for exclusive concerts, showcases, and music industry events. Experience live performances from BJA Record Empire artists and connect with fellow music lovers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-ash/50 backdrop-blur-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display text-bronze-light">{event.title}</h3>
                  <span className="px-3 py-1 bg-auburn/20 text-black rounded-full text-sm">
                    {event.availability}
                  </span>
                </div>
                <p className="text-white/80 font-sans mb-4">{event.description}</p>
                <div className="flex justify-between items-center text-white/90 mb-6">
                  <span className="font-sans">{event.date}</span>
                  <span className="font-display text-bronze">${event.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">{event.category}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePurchase(event.id)}
                    className="px-6 py-2 bg-auburn text-black rounded-full font-sans hover:bg-bronze hover:text-white transition-colors"
                  >
                    Purchase Ticket
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 font-sans mb-4">
            Need help with your ticket purchase? Contact our events team
          </p>
          <a
            href="mailto:support@bjarecordempire.com"
            className="text-bronze hover:text-bronze-light transition-colors"
          >
            support@bjarecordempire.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Tickets;
