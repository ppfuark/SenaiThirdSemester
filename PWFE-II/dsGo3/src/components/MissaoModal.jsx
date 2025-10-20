import { useState, useEffect, useRef } from "react";
import sucesso from "../assets/win.png";
import erro from "../assets/raios.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Foco no input quando o modal abrir
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const verificarResposta = () => {
    if (!resposta.trim()) {
      alert("Digite uma resposta!");
      inputRef.current?.focus();
      return;
    }

    if (resposta.trim().toLowerCase() === missao.respostaCorreta.trim().toLowerCase()) {
      setResultado("Resposta correta! Excelente trabalho!");
      setStatus("sucesso");
      setTimeout(() => onConcluir(missao.id), 1500);
    } else {
      setResultado("Resposta incorreta. Tente novamente!");
      setStatus("erro");
      setResposta("");
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Enter' && e.ctrlKey) {
      verificarResposta();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onKeyDown={handleKeyDown}
    >
      <div className="bg-gray-800/95 rounded-2xl shadow-2xl border border-blue-500/30 max-w-md w-full p-6 animate-scaleIn">
        <h2 id="modal-title" className="text-2xl font-bold text-blue-200 mb-3">
          {missao.titulo}
        </h2>

        <p id="modal-desc" className="text-gray-200 mb-6 leading-relaxed">
          {missao.descricao}
        </p>

        <label htmlFor="resposta-input" className="sr-only">
          Digite sua resposta
        </label>
        <input
          ref={inputRef}
          id="resposta-input"
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-blue-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4 transition-colors"
          type="text"
          placeholder="Digite sua resposta..."
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          aria-describedby={resultado ? "resultado-mensagem" : undefined}
        />

        <div className="flex gap-3 mb-4">
          <button
            onClick={verificarResposta}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
          >
            Enviar Resposta
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 text-gray-100 py-3 px-4 rounded-lg hover:bg-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 font-semibold"
          >
            Fechar
          </button>
        </div>

        {resultado && (
          <div
            id="resultado-mensagem"
            className={`p-4 rounded-lg text-center border ${status === "sucesso"
                ? "bg-green-900/30 border-green-400/40"
                : "bg-red-900/30 border-red-400/40"
              }`}
            role="alert"
            aria-live="polite"
          >
            <p
              className={`font-semibold mb-2 ${status === "sucesso" ? "text-green-300" : "text-red-300"
                }`}
            >
              {status === "sucesso" ? "✅ " : "❌ "}
              {resultado}
            </p>
            <img
              src={status === "sucesso" ? sucesso : erro}
              alt={status === "sucesso" ? "Missão concluída com sucesso" : "Erro na missão"}
              className="w-14 h-14 mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}