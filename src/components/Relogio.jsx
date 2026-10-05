import { useEffect, useState } from "react";

function Relogio() {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    console.log("Relogio MONTADO - intervalo ligado");

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Relogio DESMONTADO - intervalo desligado");
      clearInterval(intervalo);
    };
  }, []);

  return (
    <span className="font-mono text-purple-100 text-sm bg-purple-900 px-3 py-1 rounded-lg">
      {hora}
    </span>
  );
}

export default Relogio;