import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]); // state for people
  const [planets, setPlanets] = useState([]); // state for planets
  const [loading, setLoading] = useState(true); // keeps track of when we are fetching data to the API, indicate some loaders so that we are fetching data

  // using useEffect and asynchronous operations to make fetch calls to the different api links(also formats to json)
  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch("https://swapi.dev/api/people/?format=json");
      const data = await response.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      const response = await fetch("https://swapi.dev/api/planets/?format=json");
      const data = await response.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
  }, []);
  console.log("data", people); // debugging making sure data for people populates
  console.log("planets", planets); // debugging making sure data for planets populates

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
                <Route exact path="/people" element={<People data={people} />}></Route>
                <Route exact path="/planets" element={<Planets data={planets} />}></Route>
              </Routes>
            )}
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
