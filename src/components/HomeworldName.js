    import React, { useState, useEffect } from 'react';

const HomeworldName = ({ homeworldUrl }) => {
  const [planetName, setPlanetName] = useState('Loading...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanetName = async () => {
      if (!homeworldUrl) {
        setPlanetName('Unknown');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Convert swapi.info URLs to swapi.py4e.com if needed
        const apiUrl = homeworldUrl.replace('swapi.info', 'swapi.py4e.com');
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const planetData = await response.json();
        setPlanetName(planetData.name);
      } catch (error) {
        console.error('Error fetching planet data:', error);
        setError('Failed to load planet name');
        setPlanetName('Unknown');
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetName();
  }, [homeworldUrl]);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Unknown</span>;
  }

  return <span>{planetName}</span>;
};

export default HomeworldName;
