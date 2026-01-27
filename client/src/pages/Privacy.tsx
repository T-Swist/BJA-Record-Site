import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
            Privacy Policy
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
            <h2 className="text-2xl font-glass text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Account credentials and profile information</li>
              <li>Payment and billing information</li>
              <li>Communications with us</li>
              <li>User-generated content and feedback</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We may share information about you as follows:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies</li>
              <li>To protect the rights, property, and safety of BJA Record Empire or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">4. Data Security</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is 100% secure, so we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Access, update, or delete your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">7. Children's Privacy</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">8. International Data Transfers</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8">
            <h2 className="text-2xl font-glass text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-bronze font-wellston">
              Email: privacy@bjarecordempire.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Music Avenue, Los Angeles, CA 90001
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
            to="/refund"
            className="px-6 py-3 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
          >
            Refund Policy
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

export default Privacy;
