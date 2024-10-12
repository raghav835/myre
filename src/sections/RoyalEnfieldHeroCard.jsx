import React, { useState } from 'react';
import { Play } from 'lucide-react';

const RoyalEnfieldHeroCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative h-screen bg-black overflow-hidden mt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className="container absolute inset-0 flex flex-col justify-center z-10">
        <div className="max-w-512 max-lg:max-w-388 p-6">
          <div className="caption small-2 uppercase text-p3 text-white mb-2">
            Redefining motorcycling
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 text-white">
            Pure Motorcycling
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-white">
            Experience the thrill of riding on a Royal Enfield and explore 122 years of pure motorcycling legacy.
          </p>
        </div>
      </div>

      {/* Play Button Overlay */}
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-opacity duration-300 ease-in-out">
          <Play size={48} className="text-white opacity-75 hover:opacity-100" />
        </div>
      )}

      {/* Background GIF */}
      <div className="absolute inset-0">
        <img
          src="https://media.giphy.com/media/XjjQzPj1aow85E4dsb/giphy.gif?cid=ecf05e478jkocsw1pvswig53torbs6e04uwsy0649lcqehzf&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          className="w-full h-full object-cover opacity-50"
          alt="Royal Enfield GIF Background"
        />
      </div>
    </section>
  );
};

export default RoyalEnfieldHeroCard;
