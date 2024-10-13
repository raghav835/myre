import React, { useState } from 'react';
import MainContent from '../components/hero/MainContent';
import PlayButton from '../components/hero/PlayButton';
 

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
      <MainContent />

      {/* Play Button Overlay */}
      {isHovered && <PlayButton />}

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
