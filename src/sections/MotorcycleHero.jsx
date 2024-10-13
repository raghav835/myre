// components/MotorcycleHero.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotorcycleCard from '../components/mh/MotorcycleCard';
import NameNavigation from '../components/mh/NameNavigation';
import ActionButtons from '../components/mh/ActionButtons';
 

const motorcycles = [
  { name: 'Himalayan', img: 'https://www.freeiconspng.com/uploads/motorcycle-png-0.png' },
  { name: 'Hunter 350', img: '/api/placeholder/400/320?text=Hunter+350' },
  { name: 'Continental GT', img: '/api/placeholder/400/320?text=Continental+GT' },
  { name: 'Interceptor 650', img: '/api/placeholder/400/320?text=Interceptor+650' },
  { name: 'Meteor 350', img: '/api/placeholder/400/320?text=Meteor+350' },
];

const MotorcycleHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative bg-black text-white overflow-hidden py-8 px-4">
      <div className="relative z-10 flex flex-col justify-between items-center h-full text-center max-w-4xl mx-auto">
        <motion.div
          className="w-full bg-black bg-opacity-50 py-4 rounded-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">MOTORCYCLE</h1>
        </motion.div>

        <motion.div
          className="mt-6 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">{motorcycles[currentIndex].name}</h2>
        </motion.div>

        <div className="w-full mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MotorcycleCard motorcycle={motorcycles[currentIndex]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full space-y-6">
          <NameNavigation
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            motorcycles={motorcycles}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default MotorcycleHero;
