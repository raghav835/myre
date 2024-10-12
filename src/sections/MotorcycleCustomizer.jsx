import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const motorcycleOptions = {
  STYLE: ['Starfire Blue', 'Sandstorm White', 'Sunset Metal Grey', 'Green Gold'],
  COMFORT: ['Comfort Seat', 'Heated Grips', 'Adjustable Windscreen', 'Cruise Control'],
  PROTECTION: ['Engine Guard', 'Skid Plate', 'Hand Guards', 'Crash Bars']
};

const colorMap = {
  'Starfire Blue': '#3b82f6',
  'Sandstorm White': '#f3f4f6',
  'Sunset Metal Grey': '#9ca3af',
  'Green Gold': '#059669'
};

const MotorcycleCustomizer = () => {
  const [selectedCategory, setSelectedCategory] = useState('STYLE');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const images = [
    'https://reconfiguratorprod.royalenfield.com/re-platform-configurator-master-images/Web/Models/K1G/Himalayan_K1G.webp',
    'https://www.royalenfield.com/node/assets/configurator-master-images/Web/webp/Models/Bullet.webp',
    'https://www.royalenfield.com/node/assets/configurator-master-images/Web/webp/Models/SUPERMETEOR_650.webp'
  ];

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const buttonVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const tileVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05, rotate: 2 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative bg-black mt-10 text-white overflow-hidden flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-2 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold uppercase mb-2 text-white flex items-center">
              #MakeItYours <Sparkles className="ml-2 text-yellow-400" />
            </h2>
            <p className="max-w-xl mb-8 text-lg text-gray-300">
              From parts to paint, customize your motorcycle your way.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-2xl">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Motorcycle"
              className="w-full h-72 object-cover sm:h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <button onClick={prevImage} className={carouselButtonStyle('left')}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className={carouselButtonStyle('right')}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Category Selection */}
          <div className="flex justify-between mb-12 bg-gray-900 rounded-lg p-2">
            {Object.keys(motorcycleOptions).map((category) => (
              <motion.button
                key={category}
                className={`py-2 px-4 flex-1 text-sm font-medium uppercase rounded-md transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800 active:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {motorcycleOptions[selectedCategory].map((option, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center bg-gray-900 rounded-lg p-4 cursor-pointer
                  ${isTouchDevice ? 'active:bg-gray-800' : 'hover:bg-gray-800'}
                  transition-colors`}
                variants={tileVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div
                  className={`w-16 h-16 rounded-full mb-3 ${
                    selectedCategory === 'STYLE' ? `bg-[${colorMap[option]}]` : 'bg-gray-700'
                  }`}
                ></div>
                <span className="text-sm text-center font-medium">{option}</span>
              </motion.div>
            ))}
          </div>

          {/* Configure Now Button */}
          <div className="flex justify-center">
            <motion.button
              className="bg-gray-700 text-yellow-300 py-4 px-8 font-bold text-lg uppercase tracking-wider shadow-lg transition-all hover:bg-gray-600 active:bg-gray-800"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Configure Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const carouselButtonStyle = (position) =>
  `absolute top-1/2 transform -translate-y-1/2 ${
    position === 'left' ? 'left-4' : 'right-4'
  } bg-black bg-opacity-70 text-white rounded-full p-3 cursor-pointer hover:bg-opacity-90 active:bg-opacity-100 transition-all`;

export default MotorcycleCustomizer;