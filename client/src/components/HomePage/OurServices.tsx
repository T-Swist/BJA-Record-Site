import { useState } from 'react';

import { FaStar } from 'react-icons/fa';

const OurServices = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const services = [
    {
      title: "Artist Development",
      description: "Comprehensive training programs covering vocal coaching, stage presence, and brand building to elevate your artistry.",
      rating: 1 // 1 star
    },
    {
      title: "Music Production",
      description: "State-of-the-art recording studios with world-class producers and engineers bringing your vision to life.",
      rating: 2 // 2 star
    },
    {
      title: "Distribution & Marketing",
      description: "Global distribution across all major streaming platforms with strategic marketing campaigns.",
         rating: 3 // 3 star
    },
    {
      title: "Tour & Performance Management",
      description: "Professional booking, tour management, and performance coordination for live shows and events.",
         rating: 4 // 4 star
    }
  ];

  return (
    <section className="w-full py-16 overflow-hidden bg-black relative">
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 opacity-80" 
        style={{
          background: 'radial-gradient(circle at center -20%, rgba(181, 113, 49, 0.5) 0%, rgba(0, 0, 0, 1) 70%)'
        }}
      />

      <div className="container max-w-6xl px-4 mx-auto md:px-6 lg:px-8 relative z-10">
        <h2 className='font-glass text-white text-4xl md:text-5xl text-center mb-16'>
          Our Services
        </h2> 
      
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] w-full">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => setActiveCard(index)}
                className={`absolute transition-all duration-500 ease-in-out transform cursor-pointer
                  ${index === activeCard ? 'z-30 w-[80%] md:w-[36%]' : 'md:w-[38%]'}
                  ${index === activeCard ? 'opacity-100' : 'opacity-80'}
                `}
                style={{
                  left: `${50 + (index - activeCard) * 15}%`,
                  transform: `
                    translateX(-50%)
                    rotateY(${(index - activeCard) * 15}deg)
                    scale(${index === activeCard ? 1 : 0.9})
                  `,
                  transformOrigin: 'center',
                  perspective: '1000px',
                }}
              >
                <div 
                  className={`h-full bg-[#111111] rounded-2xl overflow-hidden shadow-2xl ${
                    index === activeCard ? 'border border-gray-400' : 'border border-[#B57131]/20'
                  }`}
                  style={{
                    background: 'linear-gradient(145deg, rgba(181, 113, 49, 0.15) 0%, rgba(0, 0, 0, 0.95) 100%)',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="p-8 relative h-full">
                    <h3 className="font-glass text-[#B57131] text-2xl md:text-3xl mb-4">
                      {service.title}
                    </h3>
                    <p className="font-wellston text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                  <div className="absolute bottom-6 left-8 flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <FaStar 
                          key={i}
                          className={`text-${i < service.rating ? 'bronze' : 'gray-600'}`}
                          size={18}
                        />
                      ))}
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

