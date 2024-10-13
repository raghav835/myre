// components/NameNavigation.jsx
import { motion } from 'framer-motion';

const NameNavigation = ({ currentIndex, setCurrentIndex, motorcycles }) => {
  return (
    <div className="flex justify-center space-x-2 overflow-x-auto scrollbar-hide px-4 w-full">
      {motorcycles.map((motorcycle, index) => (
        <motion.button
          key={motorcycle.name}
          className={`px-3 py-2 transition-all duration-300 ease-in-out flex-shrink-0 text-sm md:text-base ${
            currentIndex === index ? 'bg-yellow-400 bg-opacity-20 text-yellow-400' : 'bg-transparent text-gray-400'
          }`}
          onClick={() => setCurrentIndex(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {motorcycle.name}
        </motion.button>
      ))}
    </div>
  );
};

export default NameNavigation;
