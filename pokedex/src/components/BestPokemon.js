import React, { useState } from "react";

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

export default BestPokemonSelector;

/*
import React, { Component, useState, useEffect } from "react";
function BestPokemonFetcher() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data);
      });
  }, []);
  const [bestPokemon, setBestPokemon] = useState(null);
  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
}
class BestPokemon extends Component {
  render() {
    return (
      <div>
        <p>My favorite Pokemon is {this.props.pokemon.name}</p>{" "}
        <h3>Pokemon Abilities</h3>{" "}
        <ul>
          {this.props.pokemon.abilities.map((abilities, index) => (
            <li key={index}>{abilities.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default BestPokemonFetcher;
*/
