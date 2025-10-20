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

  const progresso = missoesConcluidas.length;
  const totalMissoes = missoes.length;
  const todasConcluidas = totalMissoes > 0 && progresso === totalMissoes;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(147,197,253,0.6)]">
              Missões DSGo
            </span>
          </h1>
          
          {/* Barra de Progresso */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-blue-200 font-medium">
                Progresso: {progresso}/{totalMissoes}
              </span>
              <span className="text-sm text-blue-200 font-medium">
                {Math.round((progresso / totalMissoes) * 100)}%
              </span>
            </div>
            <div 
              className="w-full bg-gray-700 rounded-full h-3"
              role="progressbar"
              aria-valuenow={progresso}
              aria-valuemin="0"
              aria-valuemax={totalMissoes}
              aria-label="Progresso das missões"
            >
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(progresso / totalMissoes) * 100}%` }}
              />
            </div>
          </div>

          {todasConcluidas && (
            <div 
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-4 mb-6 animate-pulse"
              role="alert"
              aria-live="polite"
            >
              <p className="text-green-300 text-lg font-semibold">
                🎉 Parabéns! Todas as missões concluídas!
              </p>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {missoes.map((missao) => (
            <MissaoCard
              key={missao.id}
              missao={missao}
              onIniciarMissao={setMissaoSelecionada}
              concluida={missoesConcluidas.includes(missao.id)}
            />
          ))}
        </div>

        {missaoSelecionada && (
          <MissaoModal
            missao={missaoSelecionada}
            onClose={() => setMissaoSelecionada(null)}
            onConcluir={concluirMissao}
          />
        )}
      </div>
    </section>
  );
}