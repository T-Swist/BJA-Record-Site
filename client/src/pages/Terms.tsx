import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms = () => {
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
            Terms of Service
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
            <h2 className="text-2xl font-glass text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              By accessing and using BJA Record Empire's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">2. Use License</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on BJA Record Empire's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-400 font-wellston space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on BJA Record Empire's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              The materials on BJA Record Empire's website are provided on an 'as is' basis. BJA Record Empire makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">4. Limitations</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              In no event shall BJA Record Empire or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BJA Record Empire's website, even if BJA Record Empire or a BJA Record Empire authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              The materials appearing on BJA Record Empire's website could include technical, typographical, or photographic errors. BJA Record Empire does not warrant that any of the materials on its website are accurate, complete or current. BJA Record Empire may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">6. Links</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              BJA Record Empire has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BJA Record Empire of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">7. Modifications</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              BJA Record Empire may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-glass text-white mb-4">9. User Conduct</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.
            </p>
          </div>

          <div className="bg-ash-light rounded-lg p-8">
            <h2 className="text-2xl font-glass text-white mb-4">10. Contact Information</h2>
            <p className="text-gray-400 font-wellston leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-bronze font-wellston">
              Email: legal@bjarecordempire.com<br />
              Phone: +1 (555) 123-4567
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
            to="/privacy"
            className="px-6 py-3 rounded-full border border-bronze/30 text-gray-300 hover:bg-bronze hover:text-black transition-all duration-300 font-sans"
          >
            Privacy Policy
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

export default Terms;
