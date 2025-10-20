import { useState } from "react";
import sucesso from "../assets/win.png";
import erro from "../assets/raios.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);

  const verificarResposta = () => {
    if (!resposta.trim()) return alert("Digite uma resposta!");

    if (resposta.trim().toLowerCase() === missao.respostaCorreta.trim().toLowerCase()) {
      setResultado("✅ Resposta correta! Excelente!");
      setStatus("sucesso");
      setTimeout(() => onConcluir(missao.id), 1200);
    } else {
      setResultado("❌ Resposta incorreta. Tente novamente!");
      setStatus("erro");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/90 rounded-2xl shadow-2xl border border-blue-700/40 max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">
          {missao.titulo}
        </h2>

        <p className="text-gray-300 mb-6">{missao.descricao}</p>

        <input
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-blue-700/40 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 mb-4"
          type="text"
          placeholder="Digite sua resposta..."
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        />

        <div className="flex gap-3 mb-4">
          <button
            onClick={verificarResposta}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            Enviar
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-700 text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-600 transition-all"
          >
            Fechar
          </button>
        </div>

        {resultado && (
          <div
            className={`p-4 rounded-lg text-center ${status === "sucesso"
                ? "bg-green-900/40 border border-green-400/40"
                : "bg-red-900/40 border border-red-400/40"
              }`}
          >
            <p
              className={`font-medium mb-2 ${status === "sucesso" ? "text-green-300" : "text-red-300"
                }`}
            >
              {resultado}
            </p>
            <img
              src={status === "sucesso" ? sucesso : erro}
              alt={status}
              className="w-16 h-16 mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
