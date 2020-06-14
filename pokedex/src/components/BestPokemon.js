import React from "react";
function BestPokemon() {
  const abilities = [" Anticipation", " Adaptability", " Run-Away"];
  return (
    <ul>
      {abilities.map((name, index) => {
        return (
          <li>
            {index}
            {name}
          </li>
        );
      })}
    </ul>
  );
}

export default BestPokemon;
