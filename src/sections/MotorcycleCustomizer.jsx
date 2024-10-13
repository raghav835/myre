import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Carousel from '../components/mc/Carousel';
import CategoryButtons from '../components/mc/CategoryButtons';
import OptionsGrid from '../components/mc/OptionsGrid';
import ConfigureButton from '../components/mc/ConfigureButton';


const motorcycleOptions = {
  STYLE: ['Starfire Blue', 'Sandstorm White', 'Sunset Metal Grey', 'Green Gold'],
  COMFORT: ['Comfort Seat', 'Heated Grips', 'Adjustable Windscreen', 'Cruise Control'],
  PROTECTION: ['Engine Guard', 'Skid Plate', 'Hand Guards', 'Crash Bars']
};

const colorMap = {
  'Starfire Blue': '#3b82f6',
  'Sandstorm White': '#f3f4f6',
  'Sunset Metal Grey': '#9ca3af',
  'Green Gold': '#059669'
};

const MotorcycleCustomizer = () => {
  const [selectedCategory, setSelectedCategory] = useState('STYLE');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const images = [
    'https://reconfiguratorprod.royalenfield.com/re-platform-configurator-master-images/Web/Models/K1G/Himalayan_K1G.webp',
    'https://www.royalenfield.com/node/assets/configurator-master-images/Web/webp/Models/Bullet.webp',
    'https://www.royalenfield.com/node/assets/configurator-master-images/Web/webp/Models/SUPERMETEOR_650.webp'
  ];

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <section className="relative bg-black mt-10 text-white overflow-hidden flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-2 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold uppercase mb-2 text-white flex items-center">
              #MakeItYours <Sparkles className="ml-2 text-yellow-400" />
            </h2>
            <p className="max-w-xl mb-8 text-lg text-gray-300">From parts to paint, customize your motorcycle your way.</p>
          </motion.div>

          <Carousel
            images={images}
            currentImageIndex={currentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
            isTouchDevice={isTouchDevice}
          />

          <CategoryButtons
            categories={Object.keys(motorcycleOptions)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isTouchDevice={isTouchDevice}
          />

          <OptionsGrid
            options={motorcycleOptions}
            selectedCategory={selectedCategory}
            colorMap={colorMap}
            isTouchDevice={isTouchDevice}
          />

          <ConfigureButton isTouchDevice={isTouchDevice} />
        </div>
      </div>
    </section>
  );
};

export default MotorcycleCustomizer;
