function Card({
  titulo,
  descricao,
  categoria,
  nivel,
  jogado,
  onToggle,
  onRemover,
}) {
  const cores = {
    facil: "border-green-500 bg-green-50",
    medio: "border-yellow-500 bg-yellow-50",
    dificil: "border-red-500 bg-red-50",
  };

  return (
    <article
      className={`border-l-4 rounded-lg p-5 shadow-md transition-shadow hover:shadow-lg ${
        cores[nivel]
      } ${jogado ? "opacity-60" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-purple-700">
          {categoria}
        </span>

        {jogado && (
          <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
            Jogado
          </span>
        )}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mt-2">
        {titulo}
      </h2>

      <p className="text-gray-600 mt-2">
        {descricao}
      </p>

      <p className="mt-4 font-semibold text-gray-700">
        Nível: {nivel}
      </p>

      <div className="flex items-center justify-between mt-5">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={jogado}
            onChange={onToggle}
            className="w-4 h-4 accent-purple-700"
          />

          Jogado
        </label>

        <button
          onClick={onRemover}
          className="text-sm text-red-500 hover:text-red-700 font-semibold"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default Card;