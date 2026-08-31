function Card({ titulo, descricao, categoria, nivel }) {
  const cores = {
    facil: "border-green-500 bg-green-50",
    medio: "border-yellow-500 bg-yellow-50",
    dificil: "border-red-500 bg-red-50",
  };

  return (
    <article
      className={`border-l-4 rounded-lg p-5 shadow-md ${cores[nivel]}`}
    >
      <span className="text-sm font-semibold text-purple-700">
        {categoria}
      </span>

      <h2 className="text-xl font-bold text-gray-800 mt-2">
        {titulo}
      </h2>

      <p className="text-gray-600 mt-2">
        {descricao}
      </p>

      <p className="mt-4 font-semibold text-gray-700">
        Nível: {nivel}
      </p>
    </article>
  );
}

export default Card;