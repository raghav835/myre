import React from 'react';

const MainContent = () => {
  return (
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
  );
};

export default MainContent;
