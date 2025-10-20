import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

  const limparInventario = () => {
    if (!window.confirm("Deseja realmente limpar o inventário?")) return;
    localStorage.removeItem("inventario");
    setFigurinhas([]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4">
      <section className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-300">Inventário</h2>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            onClick={limparInventario}
          >
            Limpar Inventário
          </button>
        </div>

        {figurinhas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma figurinha coletada ainda!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {figurinhas.map((f) => (
              <div key={f.id} className="bg-gray-800/70 backdrop-blur rounded-lg p-3 hover:scale-105 transition-transform">
                <img src={f.imagem} alt={f.nome} className="w-full h-auto rounded-md" />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
