const RideCard = ({ title, location, dateRange, imageSrc, isActive }) => (
    <div
      className={`relative w-full mx-auto flex-shrink-0 transition-all duration-300 ${isActive ? 'scale-100' : 'scale-95 opacity-70'}`}
      style={{ marginBottom: '0.5rem' }} // Adjusted margin-bottom to reduce gap
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="object-cover h-[50vh] w-full" // Reduced height for better spacing control
          src={imageSrc}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-300 text-sm flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {location}
          </p>
          <p className="text-gray-300 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {dateRange}
          </p>
        </div>
      </div>
    </div>
  );
  
  export default RideCard;
  