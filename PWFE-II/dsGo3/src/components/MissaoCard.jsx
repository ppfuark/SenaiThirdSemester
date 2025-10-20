import FloatingButton from "./FloatingButton";

export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  return (
    <article
      className={`bg-gray-800/80 backdrop-blur rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] ${concluida
        ? 'border-green-400/70 shadow-green-500/20'
        : 'border-purple-500/40 hover:border-blue-400/60'
        }`}
    >
      <h3
        id={missao.id}
        className={`text-xl font-bold mb-3 ${concluida ? 'text-green-400' : 'text-blue-300'
          }`}
      >
        {missao.titulo}
      </h3>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {missao.missao}
      </p>

      <FloatingButton
        onClick={() => onIniciarMissao(missao)}
        disabled={concluida}
        color={concluida ? "#16a34a" : "#2563eb"} // verde se concluída, azul se ativa
        lightColor={concluida ? "#22c55e" : "#3b82f6"}
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </FloatingButton>
    </article>
  );
}
