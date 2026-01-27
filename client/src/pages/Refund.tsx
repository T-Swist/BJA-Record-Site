import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Refund = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-glass text-white mb-6">
            Refund Policy
          </h1>
          <p className="text-gray-400 text-lg font-wellston">
            Last updated: January 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-bronze max-w-none"
        >
          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Overview</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              At BJA Record Empire, we strive to ensure your complete satisfaction with our services and products. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting them.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Eligible for Refund</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-bronze text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Event Cancellations</h3>
                  <p className="text-gray-400 font-wellston">
                    Full refund if an event is cancelled by BJA Record Empire. Refunds will be processed within 7-10 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-bronze text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Technical Issues</h3>
                  <p className="text-gray-400 font-wellston">
                    If you experience technical issues preventing access to purchased digital content, we will work to resolve the issue or provide a refund.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-bronze text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Duplicate Purchases</h3>
                  <p className="text-gray-400 font-wellston">
                    Accidental duplicate purchases will be refunded upon verification within 48 hours of purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-bronze text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Service Issues</h3>
                  <p className="text-gray-400 font-wellston">
                    If our services fail to meet the described standards, you may be eligible for a partial or full refund based on the circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Not Eligible for Refund</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Change of Mind</h3>
                  <p className="text-gray-400 font-wellston">
                    Tickets purchased for events cannot be refunded due to change of mind or inability to attend.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Digital Downloads</h3>
                  <p className="text-gray-400 font-wellston">
                    Once digital content (music, videos) has been downloaded or accessed, it is not eligible for refund.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Subscription Services</h3>
                  <p className="text-gray-400 font-wellston">
                    Subscription fees are non-refundable, but you can cancel at any time to prevent future charges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaTimesCircle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-sans font-bold mb-2">Past Events</h3>
                  <p className="text-gray-400 font-wellston">
                    Refund requests made after an event has occurred will not be processed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">How to Request a Refund</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-400 font-wellston space-y-3 ml-4">
              <li>Contact our support team at support@bjarecordempire.com</li>
              <li>Include your order number and reason for the refund request</li>
              <li>Provide any relevant documentation or screenshots</li>
              <li>Our team will review your request within 2-3 business days</li>
              <li>You will receive an email notification regarding the status of your refund</li>
            </ol>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Refund Processing Time</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              Once your refund request is approved:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Credit/Debit Card: 7-10 business days</li>
              <li>PayPal: 3-5 business days</li>
              <li>Bank Transfer: 5-7 business days</li>
            </ul>
            <p className="text-gray-400 font-wellston leading-relaxed mt-4">
              Please note that the exact timing may vary depending on your financial institution.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Partial Refunds</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              In certain situations, partial refunds may be granted:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Event rescheduling with significant date changes</li>
              <li>Venue changes that substantially affect the event experience</li>
              <li>Service quality issues that partially impact your experience</li>
              <li>Merchandise with minor defects or damage</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">Exchanges</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We offer exchanges for:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Defective merchandise within 30 days of purchase</li>
              <li>Incorrect items shipped (we cover return shipping)</li>
              <li>Damaged items received (with photo documentation)</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8">
            <h2 className="text-2xl font-glass text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              If you have questions about our refund policy or need assistance with a refund request:
            </p>
            <p className="text-bronze font-wellston">
              Email: support@bjarecordempire.com<br />
              Phone: +1 (555) 123-4567<br />
              Hours: Monday - Friday, 9AM - 6PM EST
            </p>
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/terms"
            className="px-6 py-3 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="px-6 py-3 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-bronze text-black hover:bg-white transition-all duration-300 font-sans font-bold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;
