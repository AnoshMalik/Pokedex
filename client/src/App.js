// client/src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonMoves, setPokemonMoves] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const details = await result.json(); 
      console.log(details);
      setPokemonName(details.name);
      setPokemonImage(details.sprites.other['official-artwork'].front_default);
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <h2>{pokemonName.toUpperCase()}</h2>
      <img src={pokemonImage} style={{ width: 300, height: 300 }}></img>
    </div>
  );
}

export default App;
