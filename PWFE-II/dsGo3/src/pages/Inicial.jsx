import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-gray-900 flex flex-col items-center justify-center text-center p-4">
      <img
        src={logo}
        className="w-56 h-56 rounded-full border-4 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] animate-pulse mb-8"
        alt="Logo DS GO"
      />
      <button
        onClick={() => navigate('/dsgo')}
        className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-full font-bold text-lg text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        Entrar no Jogo
      </button>
    </main>
  );
}
