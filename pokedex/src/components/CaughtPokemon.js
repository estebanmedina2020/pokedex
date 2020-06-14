import React from "react";
const date = new Date().toLocaleDateString();

function CaughtPokemon() {
  return (
    <div>
      <p>Caught 0 Pokemon on date</p>
      {date}
    </div>
  );
}

export default CaughtPokemon;
