import React from "react";
function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <ul>
      {abilities.map((name) => {
        return <li>{name}</li>;
      })}
    </ul>
  );
}

export default BestPokemon;
