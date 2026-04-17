import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowRight, GoArrowUpRight } from 'react-icons/go';
import buckyRaw from "../../assets/images/BuckyRaw.webp"
import jzyNo from "../../assets/images/JZyNo.jfif"
import larryG from "../../assets/images/LarryG.webp"
import BJARecordLogo from "../../assets/images/logoblack.jpg"
import nuchieMeek from "../../assets/images/NuchieMeek.webp"
import mcCaro from "../../assets/images/MC_Caro.jfif"

const images = [
  {
    url: buckyRaw,
    subtitle: 'BJA Record Empire',
    description: 'Where Legends Are Born',
  },
  {
    url: jzyNo,
    subtitle: 'Discover New Sounds',
    description: 'A Home for Rising Talents',
  },
  {
    url: larryG,
    subtitle: 'Premium Production',
    description: 'Studio Quality Excellence',
  },
  {
    url: nuchieMeek,
    subtitle: 'Live Performances',
    description: 'Unforgettable Experiences',
  },
  {
    url: mcCaro,
    subtitle: 'Creative Freedom',
    description: 'Express Your Artistry',
  },
  {
    url: BJARecordLogo,
    subtitle: 'Join The Movement',
    description: 'Be Part of Something Bigger',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5-second display time per slide

    return () => clearInterval(timer);
  }, []);

  // Different animation variants for each slide
  const getImageVariants = (index: number) => {
    const variants = [
      // Slide 0: Fade in with zoom
      {
        initial: { opacity: 0, scale: 1.2 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
      },
      // Slide 1: Slide from right
      {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
      },
      // Slide 2: Slide from left
      {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
      },
      // Slide 3: Fade with rotate
      {
        initial: { opacity: 0, scale: 0.8, rotate: -5 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 1.1, rotate: 5 }
      },
      // Slide 4: Slide from bottom
      {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 }
      },
      // Slide 5: Zoom out effect
      {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.5 }
      }
    ];
    return variants[index % variants.length];
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
      
      {/* Image container with smooth transitions */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].subtitle}
            initial={getImageVariants(currentIndex).initial}
            animate={getImageVariants(currentIndex).animate}
            exit={getImageVariants(currentIndex).exit}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Content container with safe margins */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
                {/* Smaller overlay with lighter opacity */}
                <div className="bg-black/15 backdrop-blur-sm rounded-xl p-6 md:p-8">      
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-brent text-white mb-6 leading-tight"
                >
                  {images[currentIndex].subtitle}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl font-wellston text-white/90 mb-8"
                >
                  {images[currentIndex].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 border border-gray-600 text-white font-sans text-lg rounded-full hover:bg-[linear-gradient(232deg,rgba(184, 115, 51, 1) 17%, rgba(255, 255, 255, 1) 71%)] transition-all duration-300 shadow-lg hover:shadow-bronze/60"
                  >
                    Join Now
                  </motion.button>
                  <motion.button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 flex items-center justify-center text-black font-sans text-lg rounded-full hover:bg-bronze/20 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(232deg,rgba(184, 115, 51, 1) 17%, rgba(255, 255, 255, 1) 71%)'
                    }}
                  >
                    Explore More
                    {isHovered ? <GoArrowRight className="ml-2" /> : <GoArrowUpRight className="ml-2" />}
                  </motion.button>
                </motion.div>
                </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-max">
        <ul className="flex gap-2">
          {images.map((_, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentIndex(index)}
                className={`w-[9px] h-[9px] rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-bronze w-8' : 'bg-white/30'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;
