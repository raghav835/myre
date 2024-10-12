// context/AEMContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AEMContext = createContext();

// Access the environment variables
const AEM_BASE_URL = import.meta.env.VITE_AEM_BASE_URL;
const AEM_FRAGMENT_ENDPOINT = `${AEM_BASE_URL}${import.meta.env.VITE_AEM_FRAGMENT_ENDPOINT}`;
const AEM_API_TOKEN = import.meta.env.VITE_AEM_API_TOKEN;

// AEM provider component
export const AEMProvider = ({ children }) => {
  const [aemData, setAemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch AEM fragments
  const fetchAEMContent = async () => {
    try {
      const response = await fetch(AEM_FRAGMENT_ENDPOINT, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AEM_API_TOKEN}`,
        },
      });
      const data = await response.json();
      setAemData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAEMContent();
  }, []);

  return (
    <AEMContext.Provider value={{ aemData, loading, error }}>
      {children}
    </AEMContext.Provider>
  );
};

// Custom hook to use the AEM context
export const useAEM = () => {
  return useContext(AEMContext);
};
