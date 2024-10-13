import React from 'react';
import { motion } from 'framer-motion';

const ConfigureButton = ({ isTouchDevice }) => {
  const buttonVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex justify-center mt-6">
      <motion.button
        className="bg-gray-700 text-yellow-300 py-4 px-8 font-bold text-lg uppercase tracking-wider shadow-lg transition-all hover:bg-gray-600 active:bg-gray-800"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Configure Now
      </motion.button>
    </div>
  );
};

export default React.memo(ConfigureButton);
