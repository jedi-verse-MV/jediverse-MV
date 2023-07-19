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
  const [page, setPage] = useState(1); // state for pagination makes sure that page is always on one

  const fetchPeople = async () => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}&format=json`);
    const data = await response.json();
    setPeople(data.results);
    setLoading(false);
  };

  const fetchPlanets = async () => {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}&format=json`);
    const data = await response.json();
    setPlanets(data.results);
    setLoading(false);
  };

  const fetchFilms = async () => {
    const response = await fetch(`https://swapi.dev/api/films/?format=json`);
    const data = await response.json();
    setFilms(data.results);
    setLoading(false);
  };

  const fetchSpecies = async () => {
    const response = await fetch(`https://swapi.dev/api/species/?page=${page}&format=json`);
    const data = await response.json();
    setSpecies(data.results);
    setLoading(false);
  };

  const fetchStarships = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}&format=json`);
    const data = await response.json();
    setStarships(data.results);
    setLoading(false);
  };

  const fetchVehicles = async () => {
    const response = await fetch(`https://swapi.dev/api/vehicles/?pages=${page}&format=json`);
    const data = await response.json();
  };

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchStarships();
  }, [page]); // add page prop to the empty array

  const handleNextPage = async () => {
    setPage(page + 1);
  };

  const handlePreviousPage = async () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  console.log("data", people); // debugging making sure data for people populates
  console.log("planets", planets); // debugging making sure data for planets populates
  console.log("species", species); // debugging making sure data for species populates
  console.log("starships", starships); // debugging making sure data for species populates

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                {/* If loading is true meaning that we have not fetched the data then we want to indicate that the data is showing by saying "Loading"  */}
                {/* If loading is not true, meaning if the data has already been fetched then we will just display the route components */}
                <Loader inverted>Loading...</Loader>
              </Dimmer>
            ) : (
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/people"
                  element={<People data={people} page={page} next={handleNextPage} previous={handlePreviousPage} />}
                ></Route>
                <Route
                  exact
                  path="/planets"
                  element={<Planets data={planets} page={page} next={handleNextPage} previous={handlePreviousPage} />}
                ></Route>
                <Route exact path="/films" element={<Films data={films} />}></Route>
                <Route
                  exact
                  path="/species"
                  element={<Species data={species} page={page} next={handleNextPage} previous={handlePreviousPage} />}
                ></Route>
                <Route
                  exact
                  path="/starships"
                  element={
                    <Starships data={starships} page={page} next={handleNextPage} previous={handlePreviousPage} />
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
