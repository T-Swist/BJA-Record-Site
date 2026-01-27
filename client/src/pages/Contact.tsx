import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { useSubmitContactFormMutation } from '../store/api/contactApi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContactForm(formData).unwrap();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg font-wellston max-w-2xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ash-light rounded-lg p-8"
          >
            <h2 className="text-2xl font-glass text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-sans mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-bronze/30 text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-sans mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-bronze/30 text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-sans mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-bronze/30 text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-sans mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-bronze/30 text-white placeholder-gray-500 outline-none focus:border-bronze transition-colors font-sans resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 font-sans">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400 font-sans">
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 rounded-full bg-bronze text-black font-sans font-bold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-glass text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-bronze text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-sans font-bold mb-1">Email</h3>
                    <p className="text-gray-400 font-wellston">info@bjarecordempire.com</p>
                    <p className="text-gray-400 font-wellston">support@bjarecordempire.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-bronze text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-sans font-bold mb-1">Phone</h3>
                    <p className="text-gray-400 font-wellston">+1 (555) 123-4567</p>
                    <p className="text-gray-400 font-wellston">Mon - Fri, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-bronze text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-sans font-bold mb-1">Address</h3>
                    <p className="text-gray-400 font-wellston">
                      123 Music Avenue<br />
                      Los Angeles, CA 90001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-ash-light rounded-lg p-8">
              <h3 className="text-xl font-glass text-white mb-4">Follow Us</h3>
              <p className="text-gray-400 font-wellston mb-6">
                Stay connected with us on social media for the latest updates and releases
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center text-bronze hover:bg-bronze hover:text-black transition-all duration-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-ash-light rounded-lg p-8">
              <h3 className="text-xl font-glass text-white mb-4">Business Hours</h3>
              <div className="space-y-2 font-wellston">
                <div className="flex justify-between text-gray-400">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-lg overflow-hidden h-96 bg-ash-light"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7334!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BJA Record Empire Location"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
