// components/MotorcycleCard.jsx
import { motion } from 'framer-motion';

const MotorcycleCard = ({ motorcycle, isActive }) => (
  <motion.div
    className={`relative w-full max-w-md mx-auto h-48 md:h-64 bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
    layout
  >
    <div className="relative w-full h-full">
      <img
        src={motorcycle.img}
        alt={motorcycle.name}
        className="absolute top-0 left-0 w-full h-full object-contain p-4"
      />
    </div>

    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center">
      <span className="text-xl md:text-2xl text-white font-bold">{motorcycle.name}</span>
    </div>
  </motion.div>
);

export default MotorcycleCard;
