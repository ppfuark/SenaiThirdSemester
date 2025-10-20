import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur border-t border-blue-700/40 shadow-lg">
            <ul className="flex justify-around items-center p-2 text-sm text-blue-300">
                {[
                    { to: 'missao', icon: missao, label: 'Missões' },
                    { to: 'inventario', icon: bau, label: 'Inventário' },
                    { to: 'mapa', icon: mapa, label: 'Mapa' },
                    { to: 'camera', icon: camera, label: 'Câmera' },
                ].map((item, i) => (
                    <Link key={i} to={item.to} className="flex-1">
                        <li className="flex flex-col items-center p-2 hover:bg-blue-700/10 rounded-lg transition-all hover:scale-105">
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-8 h-8 mb-1 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                            />
                            <span className="text-xs font-medium">{item.label}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
