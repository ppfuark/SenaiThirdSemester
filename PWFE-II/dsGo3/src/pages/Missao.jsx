import React from "react";
import { missoes } from "../data/dadosMissao";
import { MissaoCard } from "../components/MissaoCard";
import { MissaoModal } from "../components/MissaoModal";

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = React.useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = React.useState([]);

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]);
    setMissaoSelecionada(null);
  };

  const todasConcluidas = missoes.length > 0 && missoes.length === missoesConcluidas.length;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
            Missões
          </span>
        </h2>

        {todasConcluidas && (
          <div className="text-center mb-8 animate-pulse">
            <p className="text-green-400 text-xl font-semibold">
              🎉 Todas as missões foram concluídas! Excelente trabalho!
            </p>
          </div>
        )}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn"
          style={{
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          {missoes.map((m) => (
            <MissaoCard
              key={m.id}
              missao={m}
              onIniciarMissao={setMissaoSelecionada}
              concluida={missoesConcluidas.includes(m.id)}
            />
          ))}
        </div>

        {missaoSelecionada && (
          <MissaoModal
            missao={missaoSelecionada}
            onClose={() => setMissaoSelecionada(null)}
            onConcluir={() => concluirMissao(missaoSelecionada.id)}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
