import { useState } from "react";

function GameForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Aventura");
  const [nivel, setNivel] = useState("medio");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (titulo.trim() === "" || descricao.trim() === "") {
      return;
    }

    onAdicionar({
      titulo,
      descricao,
      categoria,
      nivel,
    });

    setTitulo("");
    setDescricao("");
    setCategoria("Aventura");
    setNivel("medio");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="bg-white rounded-xl shadow-md p-5 mb-8"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Adicionar novo jogo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Nome do jogo
          </label>

          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: The Witcher 3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Categoria
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option>Aventura</option>
            <option>Estratégia</option>
            <option>Simulação</option>
            <option>Esporte</option>
            <option>Ação</option>
            <option>RPG</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Nível
          </label>

          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="facil">fácil</option>
            <option value="medio">médio</option>
            <option value="dificil">difícil</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Descrição
          </label>

          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do jogo"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold px-5 py-2 rounded-lg transition-colors"
      >
        + Adicionar jogo
      </button>
    </form>
  );
}

export default GameForm;