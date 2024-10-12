import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ImageCarousel = ({ images, currentImageIndex, nextImage, prevImage }) => (
  <div className="relative w-full h-full rounded-lg overflow-hidden">
    <img
      src={images[currentImageIndex]}
      alt="Motorcycle"
      className="w-full h-full object-cover"
    />
    <button onClick={prevImage} className={carouselButtonStyle('left')}>
      <ChevronLeft size={24} />
    </button>
    <button onClick={nextImage} className={carouselButtonStyle('right')}>
      <ChevronRight size={24} />
    </button>
  </div>
);

const carouselButtonStyle = (position) =>
  `absolute top-1/2 transform -translate-y-1/2 ${position === 'left' ? 'left-2' : 'right-2'} bg-black bg-opacity-50 text-white rounded-full p-2 cursor-pointer`;

export default ImageCarousel;
