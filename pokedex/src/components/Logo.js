import React from "react";
function Logo() {
  const { appName } = "My Pokedex";

  return (
    <div>
      <article>
        <h1>Welcome to the Pokedex</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="logo"
        />
      </article>
    </div>
  );
}

export default Logo;
