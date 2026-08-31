import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const jogos = [
    {
      id: 1,
      titulo: "Minecraft",
      descricao: "Jogo de construção e exploração em um mundo aberto.",
      categoria: "Aventura",
      nivel: "facil",
    },
    {
      id: 2,
      titulo: "League of Legends",
      descricao: "Jogo competitivo de estratégia com diferentes campeões.",
      categoria: "Estratégia",
      nivel: "dificil",
    },
    {
      id: 3,
      titulo: "Stardew Valley",
      descricao: "Simulador de fazenda com exploração, pesca e aventuras.",
      categoria: "Simulação",
      nivel: "medio",
    },
    {
      id: 4,
      titulo: "Rocket League",
      descricao: "Partidas de futebol utilizando carros em arenas.",
      categoria: "Esporte",
      nivel: "medio",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="max-w-6xl mx-auto w-full px-6 py-10 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Jogos disponíveis
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogos.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              categoria={jogo.categoria}
              nivel={jogo.nivel}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;