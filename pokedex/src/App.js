import React from "react";
import Logo from "./components/Logo";
import BestPokemonSelector from "./components/BestPokemon";
import "./App.css";
import CaughtPokemon from "./components/CaughtPokemon";

const abilities = [" Anticipation", " Adaptability", " Run-Away"];

const Pokedex = () => (
  <div>
    <Logo appName="Pokedex" />
    <BestPokemonSelector abilities={abilities} />
    <CaughtPokemon date={new Date().toLocaleDateString()} />
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
