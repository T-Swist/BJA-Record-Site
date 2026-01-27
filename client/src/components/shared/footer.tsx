import { Link } from 'react-router-dom';
import { useState } from 'react';
import BJARecordLogo from "../../assets/images/logowhite.png"
import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useSubscribeToNewsletterMutation } from '../../store/api/newsletterApi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [subscribeToNewsletter, { isLoading }] = useSubscribeToNewsletterMutation();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await subscribeToNewsletter({ email }).unwrap();
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    }
  };

  return (
    <footer className="pt-16 pb-8" style={{ background: 'linear-gradient(9deg,rgba(3, 3, 3, 1) 55%, rgba(255, 255, 255, 0.12) 100%)'}}>
      <div className="mx-auto px-4 sm:px-6 lg:pl-12 lg:pr-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1 - Logo and Social */}
          <div className="space-y-6">
            <Link to="/">
              <img src={BJARecordLogo} className="w-44" alt="BJA Record Empire Logo" />
            </Link>
            
            <p className="text-gray-400 font-wellston md:max-w-[260px]">
              Premium online ticketing and event curation platform for luxury experiences.
            </p>
            
            <div className="flex gap-4 pt-8">
              <Link to="" className='text-gray-400 text-xl hover:text-bronze transition-colors duration-200'>
                <FaEnvelope />
              </Link>
              <Link to="" className='text-gray-400 text-xl hover:text-bronze transition-colors duration-200'>
                <FaX />
              </Link>
              <Link to="" className='text-gray-400 text-xl hover:text-bronze transition-colors duration-200'>
                <FaFacebook />
              </Link>
              <Link to="" className='text-gray-400 text-xl hover:text-bronze transition-colors duration-200'>
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Column 2 & 3 - Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="text-lg font-display text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 font-sans">
                <li><Link to="/our-story" className="text-gray-400 hover:text-bronze transition-colors duration-200">Our Story</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-bronze transition-colors duration-200">Services</Link></li>
                <li><Link to="/social-club" className="text-gray-400 hover:text-bronze transition-colors duration-200">Social Club</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-display text-white mb-4">Legal</h4>
              <ul className="space-y-3 font-sans">
                <li><Link to="/terms" className="text-gray-400 hover:text-bronze transition-colors duration-200">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-bronze transition-colors duration-200">FAQs</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-bronze transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-bronze transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-bronze transition-colors duration-200">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-display text-white">Newsletter</h4>
            <p className="text-gray-400 font-sans">Join our community for exclusive updates</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-black/30 text-white px-4 py-3 rounded-l-md border border-gray-800 outline-none flex-1 font-sans text-sm"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-bronze px-4 py-3 rounded-r-md font-sans hover:bg-auburn transition-colors duration-200 text-sm disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-xs font-sans">Successfully subscribed!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-xs font-sans">Subscription failed. Try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 w-full">
          <div className="flex justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-sans">
              &copy; {new Date().getFullYear()} BJA Record Empire. All rights reserved.
            </p>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;