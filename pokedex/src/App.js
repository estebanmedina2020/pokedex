import React from "react";
import Logo from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import "./App.css";

const abilities = [" Anticipation", " Adaptability", " Run-Away"];

const Pokedex = () => (
  <div>
    <Logo appName="Pokedex" />
    <BestPokemon abilities={abilities} />
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
