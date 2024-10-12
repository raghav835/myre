import React from 'react';

const CategorySelection = ({ selectedCategory, setSelectedCategory }) => (
  <div className="flex justify-between mb-8">
    {Object.keys(motorcycleOptions).map((category) => (
      <button
        key={category}
        className={`py-2 px-4 flex-1 text-sm font-medium uppercase ${
          selectedCategory === category ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
        }`}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategorySelection;
