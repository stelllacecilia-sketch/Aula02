import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GameForm from "./components/GameForm";

const JOGOS_INICIAIS = [
  {
    id: 1,
    titulo: "Minecraft",
    descricao: "Jogo de construção e exploração em um mundo aberto.",
    categoria: "Aventura",
    nivel: "facil",
    jogado: false,
  },
  {
    id: 2,
    titulo: "League of Legends",
    descricao: "Jogo competitivo de estratégia com diferentes campeões.",
    categoria: "Estratégia",
    nivel: "dificil",
    jogado: true,
  },
  {
    id: 3,
    titulo: "Stardew Valley",
    descricao: "Simulador de fazenda com exploração, pesca e aventuras.",
    categoria: "Simulação",
    nivel: "medio",
    jogado: false,
  },
  {
    id: 4,
    titulo: "Rocket League",
    descricao: "Partidas de futebol utilizando carros em arenas.",
    categoria: "Esporte",
    nivel: "medio",
    jogado: false,
  },
];

const FILTROS = [
  {
    valor: "todos",
    rotulo: "Todos",
  },
  {
    valor: "pendentes",
    rotulo: "Não jogados",
  },
  {
    valor: "concluidos",
    rotulo: "Jogados",
  },
];

function App() {
  const [jogos, setJogos] = useState(() => {
    const salvos = localStorage.getItem("gamevault-jogos");

    return salvos ? JSON.parse(salvos) : JOGOS_INICIAIS;
  });

  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    localStorage.setItem("gamevault-jogos", JSON.stringify(jogos));
  }, [jogos]);

  function adicionarJogo(novoJogo) {
    setJogos((atual) => [
      ...atual,
      {
        ...novoJogo,
        id: Date.now(),
        jogado: false,
      },
    ]);
  }

  function alternarJogado(id) {
    setJogos((atual) =>
      atual.map((jogo) =>
        jogo.id === id
          ? { ...jogo, jogado: !jogo.jogado }
          : jogo
      )
    );
  }

  function removerJogo(id) {
    setJogos((atual) => atual.filter((jogo) => jogo.id !== id));
  }

  const jogosFiltrados = jogos.filter((jogo) => {
    if (filtro === "pendentes") {
      return !jogo.jogado;
    }

    if (filtro === "concluidos") {
      return jogo.jogado;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="max-w-6xl mx-auto w-full px-6 py-10 flex-1">
        <GameForm onAdicionar={adicionarJogo} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Jogos disponíveis ({jogos.length})
          </h2>

          <div className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                  filtro === opcao.valor
                    ? "bg-purple-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogosFiltrados.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              categoria={jogo.categoria}
              nivel={jogo.nivel}
              jogado={jogo.jogado}
              onToggle={() => alternarJogado(jogo.id)}
              onRemover={() => removerJogo(jogo.id)}
            />
          ))}
        </section>

        {jogosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            Nenhum jogo encontrado neste filtro.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;