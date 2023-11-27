// client/src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonStats, setPokemonStats] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const details = await result.json();
      console.log(details);
      setPokemonName(details.name);
      setPokemonImage(details.sprites.other['official-artwork'].front_default);
      setPokemonType(details.types[0].type.name.toUpperCase());
      setPokemonStats(details.stats[0].base_stat);
      setPokemonMoves([details.moves[0].move.name, details.moves[1].move.name, details.moves[2].move.name]);
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <h2>
        {pokemonName.toUpperCase()} - {pokemonStats}HP
      </h2>
      <img
        src={pokemonImage}
        style={{ width: 300, height: 300, border: "solid black 1px" }}
      ></img>
      <h2>Type - {pokemonType}</h2>
      <h3>Moves - {pokemonMoves}</h3>
    </div>
  );
}

export default App;
