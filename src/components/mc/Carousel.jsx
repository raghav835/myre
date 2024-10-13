import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Carousel = ({ images, currentImageIndex, nextImage, prevImage, isTouchDevice }) => {
  const buttonVariants = {
    hover: isTouchDevice ? {} : { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
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
  );
};

const carouselButtonStyle = (position) =>
  `absolute top-1/2 transform -translate-y-1/2 ${position === 'left' ? 'left-4' : 'right-4'} 
  bg-black bg-opacity-70 text-white rounded-lg p-3 cursor-pointer hover:bg-opacity-90 active:bg-opacity-100 transition-all 
  w-10 h-10`;

export default React.memo(Carousel);
