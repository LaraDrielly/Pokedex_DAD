import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonForm from "./components/FormsPokemon";
import PokemonList from "./components/ListaPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("pokemons");
    if (dadosSalvos) {
      setPokemons(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  const adicionarPokemon = (novoPokemon) => {
    setPokemons([...pokemons, novoPokemon]);
    setMensagem("Pokémon cadastrado com sucesso!");

    setTimeout(() => setMensagem(""), 2000);
  };

  return (
    <div className="container">
      <h1>Cadastro de Pokémons ⚡</h1>

      <PokemonForm onAddPokemon={adicionarPokemon} setMensagem={setMensagem} />
      {mensagem && <p className="mensagem">{mensagem}</p>}

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
