import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Info from "./components/Info";

function App() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    let promises = [];

    for (let i = 1; i < 21; i++) {
      promises.push(
        fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
      );
    }

    const responses = await Promise.all(promises);

    const jsonPromises = await responses.map((response) => response.json());

    const jsonResponses = await Promise.all(jsonPromises);

    setCharacters(
      await jsonResponses
        .map((reponse) => {
          return reponse.results;
        })
        .flat()
    );
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/dashboard"
            element={<Dashboard characters={characters} />}
          ></Route>
          <Route
            path="/cards/:id"
            element={<Info cards={characters} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
