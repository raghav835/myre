import React from 'react';
import { motion } from 'framer-motion';

const CategoryButtons = ({ categories, selectedCategory, setSelectedCategory, isTouchDevice }) => {
  const buttonVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex justify-between gap-0 mb-0">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`py-4 px-4 flex-1 text-sm font-medium uppercase rounded-lg transition-all ${selectedCategory === category
              ? 'bg-yellow-500 text-black shadow-lg'
              : 'bg-gray-900 text-gray-300 hover:bg-gray-800 active:bg-gray-700'
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
  );
};

export default React.memo(CategoryButtons);
