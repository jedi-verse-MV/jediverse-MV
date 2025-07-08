import React, { useState, useEffect } from "react";

function HomeworldName({ homeworldUrl }) {
  const [planetName, setPlanetName] = useState("Loading..."); // takes homeworlUrl as prop 

  useEffect(() => { // fetches planet data from that URL
    const fetchPlanetName = async () => {
      try {
        const response = await fetch(homeworldUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const planetData = await response.json();
        setPlanetName(planetData.name); // extracts and displays the name 
      } catch (error) {
        console.error("Error fetching planet:", error);
        setPlanetName("Unknown");
      }
    };

    if (homeworldUrl) {
      fetchPlanetName();
    }
  }, [homeworldUrl]);

  return <span>{planetName}</span>;
}

export default HomeworldName;
