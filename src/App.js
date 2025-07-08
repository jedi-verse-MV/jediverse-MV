/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Species from "./components/Species";
import Starships from "./components/Starships";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]); // state for people
  const [planets, setPlanets] = useState([]); // state for planets
  const [loading, setLoading] = useState(true); // keeps track of when we are fetching data to the API, indicate some loaders so that we are fetching data
  const [films, setFilms] = useState([]); // state for films
  const [species, setSpecies] = useState([]); // state for species
  const [starships, setStarships] = useState([]); //state for starships

  //Separate page for each endpoint, state for pagination for each endpoint
  const [peoplePage, setPeoplePage] = useState(1);
  const [planetsPage, setPlanetsPage] = useState(1);
  const [speciesPage, setSpeciesPage] = useState(1);
  const [starshipsPage, setStarshipsPage] = useState(1);

  const fetchPeople = async () => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/people/?page=${peoplePage}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPeople(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching people:", error);
      setLoading(false);
    }
  };

  const fetchPlanets = async () => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/planets/?page=${planetsPage}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlanets(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching planets:", error);
      setLoading(false);
    }
  };

  const fetchFilms = async () => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/films/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFilms(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching films:", error);
      setLoading(false);
    }
  };

  const fetchSpecies = async () => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/species/?page=${speciesPage}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSpecies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching species:", error);
      setLoading(false);
    }
  };

  const fetchStarships = async () => {
    try {
      const response = await fetch(`https://swapi.py4e.com/api/starships/?page=${starshipsPage}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStarships(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching starships:", error);
      setLoading(false);
    }
  };

  // useEffect for each endpoint to pull up the respective pages
  // add page prop to the empty array so that page for each endpoint is fetched and rendered
  useEffect(() => {
    fetchPeople();
  }, [peoplePage]);

  useEffect(() => {
    fetchPlanets();
  }, [planetsPage]);

  useEffect(() => {
    fetchSpecies();
  }, [speciesPage]);

  useEffect(() => {
    fetchStarships();
  }, [starshipsPage]);

  // separate useEffect for films
  useEffect(() => {
    fetchFilms();
  }, []);

  // handles the next button for each endpoint
  const handleNextPage = (category) => {
    if (category === "people") {
      setPeoplePage(peoplePage + 1);
    } else if (category === "planets") {
      setPlanetsPage(planetsPage + 1);
    } else if (category === "species") {
      setSpeciesPage(speciesPage + 1);
    } else if (category === "starships") {
      setStarshipsPage(starshipsPage + 1);
    }
  };

  //handles the previous button for each endpoint
  const handlePreviousPage = (category) => {
    if (category === "people") {
      setPeoplePage(peoplePage > 1 ? peoplePage - 1 : 1);
    } else if (category === "planets") {
      setPlanetsPage(planetsPage > 1 ? planetsPage - 1 : 1);
    } else if (category === "species") {
      setSpeciesPage(speciesPage > 1 ? speciesPage - 1 : 1);
    } else if (category === "starships") {
      setStarshipsPage(starshipsPage > 1 ? starshipsPage - 1 : 1);
    }
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading...</Loader>
              </Dimmer>
            ) : (
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/people"
                  element={
                    <People
                      data={people}
                      page={peoplePage}
                      next={() => handleNextPage("people")}
                      previous={() => handlePreviousPage("people")}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/planets"
                  element={
                    <Planets
                      data={planets}
                      page={planetsPage}
                      next={() => handleNextPage("planets")}
                      previous={() => handlePreviousPage("planets")}
                    />
                  }
                ></Route>
                <Route exact path="/films" element={<Films data={films} />}></Route>
                <Route
                  exact
                  path="/species"
                  element={
                    <Species
                      data={species}
                      page={speciesPage}
                      next={() => handleNextPage("species")}
                      previous={() => handlePreviousPage("species")}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/starships"
                  element={
                    <Starships
                      data={starships}
                      page={starshipsPage}
                      next={() => handleNextPage("starships")}
                      previous={() => handlePreviousPage("starships")}
                    />
                  }
                ></Route>
              </Routes>
            )}
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
