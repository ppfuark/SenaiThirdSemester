import FloatingButton from "./FloatingButton";

export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  return (
    <article
      className={`bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] ${concluida
          ? 'border-green-400/60 shadow-green-500/20'
          : 'border-purple-500/50 hover:border-blue-400/70'
        }`}
      aria-labelledby={`missao-title-${missao.id}`}
      aria-describedby={`missao-desc-${missao.id}`}
    >
      <h3
        id={`missao-title-${missao.id}`}
        className={`text-xl font-bold mb-3 ${concluida ? 'text-green-300' : 'text-blue-200'
          }`}
      >
        {missao.titulo}
        {concluida && (
          <span className="ml-2 text-sm" aria-label="Missão concluída">✅</span>
        )}
      </h3>

      <p
        id={`missao-desc-${missao.id}`}
        className="text-gray-200 mb-4 leading-relaxed"
      >
        {missao.missao}
      </p>

      <FloatingButton
        onClick={() => onIniciarMissao(missao)}
        disabled={concluida}
        color={concluida ? "#15803d" : "#1d4ed8"}
        lightColor={concluida ? "#16a34a" : "#2563eb"}
        ariaLabel={concluida ? `Missão ${missao.titulo} concluída` : `Iniciar missão ${missao.titulo}`}
      >
        {concluida ? "Missão Concluída" : "Iniciar Missão"}
      </FloatingButton>
    </article>
  );
}