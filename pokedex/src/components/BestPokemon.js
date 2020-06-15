import React from "react";
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
