import React, { useState } from "react";

function FormsPokemon({ onAddPokemon, setMensagem }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !tipo || !descricao || !poder) {
      setMensagem("Preencha todos os campos antes de cadastrar!");
      return;
    }

    const novoPokemon = { nome, tipo, descricao, poder };
    onAddPokemon(novoPokemon);

    setNome("");
    setTipo("");
    setDescricao("");
    setPoder("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome do Pokémon</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome..."
      />

      <label>Tipo</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione um tipo</option>
        <option value="🔥 Fogo">🔥 Fogo</option>
        <option value="💧 Água">💧 Água</option>
        <option value="🌱 Grama">🌱 Grama</option>
        <option value="⚡ Elétrico">⚡ Elétrico</option>
        <option value="🧠 Psíquico">🧠 Psíquico</option>
        <option value="🪨 Pedra">🪨 Pedra</option>
      </select>

      <label>Descrição</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descreva o Pokémon..."
      />

      <label>Poder (0 a 100)</label>
      <input
        type="number"
        min="0"
        max="100"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormsPokemon;
