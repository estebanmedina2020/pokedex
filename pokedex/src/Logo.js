import React from "react";
function Logo() {
  const appName = "My Pokedex";

  return (
    <div>
      <h1>{appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
