import { useState, useRef, useEffect } from 'react';
import RideCard from './RideCard';

const Carousel = ({ items }) => {
  // State and refs at the top for readability
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Update carousel transform on index change
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden h-full">
      {/* Carousel Container */}
      <div ref={carouselRef} className="flex transition-transform duration-300 ease-in-out">
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <RideCard {...item} isActive={index === currentIndex} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute left-4 top-1/4 flex flex-col space-y-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-1 transition-all duration-300 cursor-pointer ${index === currentIndex ? 'h-12 bg-white' : 'h-6 bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
