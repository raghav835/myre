import React from 'react';
import { Play } from 'lucide-react';

const PlayButton = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-opacity duration-300 ease-in-out">
      <Play size={48} className="text-white opacity-75 hover:opacity-100" />
    </div>
  );
};

export default PlayButton;
