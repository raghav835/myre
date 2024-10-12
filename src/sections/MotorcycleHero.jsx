import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const motorcycles = [
  { name: 'Himalayan', img: 'https://reconfiguratorprod.royalenfield.com/re-platform-configurator-master-images/Images/K1F/Webp/K1F_RidingShot.webp' },
  { name: 'Hunter 350', img: 'https://reconfiguratorprod.royalenfield.com/re-platform-configurator-master-images/Images/P4M/P4M_RidingShot.webp' },
  { name: 'Continental GT', img: 'https://reconfiguratorprod.royalenfield.com/re-platform-configurator-master-images/Web/Models/K1G/Himalayan_K1G.webp' },
];

const CarouselNavigation = ({ currentIndex, setCurrentIndex, totalMotorcycles }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-sm mx-auto mb-8">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft
          className="text-gray-200 cursor-pointer"
          onClick={() => setCurrentIndex(prevIndex => prevIndex === 0 ? totalMotorcycles - 1 : prevIndex - 1)}
          size={40}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight
          className="text-gray-200 cursor-pointer"
          onClick={() => setCurrentIndex(prevIndex => prevIndex === totalMotorcycles - 1 ? 0 : prevIndex + 1)}
          size={40}
        />
      </motion.div>
    </div>
  );
};

const ActionButton = ({ children, href }) => (
  <motion.button
    className="bg-gray-700 text-yellow-400 py-3 px-6 rounded-none text-lg font-semibold transition-all duration-300 relative overflow-hidden group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{children}</span>
    <motion.div
      className="absolute inset-0 bg-yellow-400"
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      {children}
    </motion.span>
  </motion.button>
);

const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm mx-auto mb-10">
    <ActionButton>CONFIGURE NOW</ActionButton>
    <ActionButton href="https://www.royalenfield.com/in/en/forms/book-a-test-ride/">BOOK A TEST RIDE</ActionButton>
  </div>
);

const MotorcycleHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={motorcycles[currentIndex].img}
          alt={motorcycles[currentIndex].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col justify-between items-center h-full text-center px-4">
        <motion.div
          className="w-full bg-black bg-opacity-50 py-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-wider">MOTORCYCLE</h1>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">Explore {motorcycles[currentIndex].name}</h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-lg mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {motorcycles.map((motorcycle, index) => (
            <motion.span
              key={motorcycle.name}
              className={`cursor-pointer px-4 py-2 rounded-full ${
                currentIndex === index ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {motorcycle.name}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-auto">
          <CarouselNavigation
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            totalMotorcycles={motorcycles.length}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default MotorcycleHero;