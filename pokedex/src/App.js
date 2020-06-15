import React from "react";
import Logo from "./components/Logo.js";
import BestPokemon from "./components/BestPokemon.js";
import CaughtPokemon from "./components/CaughtPokemon.js";

const abilities = [" Anticipation", " Adaptability", " Run-Away"];

const Pokedex = () => (
  <div>
    <Logo appName="Pokedex" />
    <BestPokemon abilities={abilities} />
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
