import React from "react";

function ListaPokemon({ pokemons }) {
  if (pokemons.length === 0) {
    return <p className="mensagem">Nenhum Pokémon cadastrado ainda!</p>;
  }

  return (
    <div className="lista">
      <h2>Pokémons cadastrados</h2>
      <ul>
        {pokemons.map((p, index) => (
          <li key={index}>
            <strong>{p.nome}</strong> — {p.tipo}
            <br />
            {p.descricao}
            <br />
            Poder: {p.poder}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPokemon;
