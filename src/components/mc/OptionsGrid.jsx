import React from 'react';
import { motion } from 'framer-motion';

const OptionsGrid = ({ options, selectedCategory, colorMap, isTouchDevice }) => {
  const tileVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05, rotate: 2 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
      {options[selectedCategory].map((option, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center border border-gray-600 bg-gray-900 rounded-lg p-4 cursor-pointer
          ${isTouchDevice ? 'active:bg-gray-800' : 'hover:bg-gray-800'} transition-all transform ${selectedCategory === 'STYLE' ? 'hover:scale-105' : ''}`}
          variants={tileVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div
            className={`w-16 h-16 rounded-full mb-3 ${selectedCategory === 'STYLE' ? `bg-[${colorMap[option]}]` : 'bg-gray-700'
              }`}
          ></div>
          <span className="text-sm text-center font-medium">{option}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(OptionsGrid);
