import React from "react";
import Logo from "./components/Logo.js";
import BestPokemon from "./components/BestPokemon.js";
import CaughtPokemon from "./components/CaughtPokemon.js";

const Pokedex = () => (
  <div>
    <Logo />
    <BestPokemon />
    <CaughtPokemon />
  </div>
);

export default Pokedex;

/*
function Pokedex() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}
*/
