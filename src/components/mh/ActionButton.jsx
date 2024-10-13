// components/ActionButton.jsx
import { motion } from 'framer-motion';

const ActionButton = ({ children }) => (
  <motion.button
    className="bg-gray-700 text-yellow-400 py-3 px-6 text-lg font-semibold transition-all duration-300 relative overflow-hidden group flex-1"
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
    <motion.span className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {children}
    </motion.span>
  </motion.button>
);

export default ActionButton;
