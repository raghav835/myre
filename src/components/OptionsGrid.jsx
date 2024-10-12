import React from 'react';

const OptionsGrid = ({ selectedCategory, motorcycleOptions, colorMap }) => (
  <div className="grid grid-cols-4 gap-4 mb-8">
    {motorcycleOptions[selectedCategory].map((option, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full mb-2 ${
            selectedCategory === 'STYLE' ? `bg-[${colorMap[option]}]` : 'bg-gray-600'
          }`}
        ></div>
        <span className="text-sm text-center">{option}</span>
      </div>
    ))}
  </div>
);

export default OptionsGrid;
