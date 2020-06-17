import React, { Component } from "react";

class BestPokemon extends Component
state = {
    PokemonNames: [],
  };

  const BestPokemon = (props) => {
  return (
    <ul>
      {props.abilities.map((abilities, index) => {
        return (
          <li>
            {index}
            {abilities}
          </li>
        );
      })}
    </ul>
  );
};

export default BestPokemon;
