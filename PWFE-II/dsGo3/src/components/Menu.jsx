import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link, useLocation } from 'react-router-dom';

export function Menu() {
    const location = useLocation();

    const menuItems = [
        { to: '/dsgo/missao', icon: missao, label: 'Missões', aria: 'Navegar para Missões' },
        { to: '/dsgo/inventario', icon: bau, label: 'Inventário', aria: 'Navegar para Inventário' },
        { to: '/dsgo/mapa', icon: mapa, label: 'Mapa', aria: 'Navegar para Mapa' },
        { to: '/dsgo/camera', icon: camera, label: 'Câmera', aria: 'Navegar para Câmera' },
    ];

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-blue-500/50 shadow-2xl"
            aria-label="Navegação principal"
        >
            <ul className="flex justify-around items-center p-2 text-sm text-blue-200">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                        <li key={index} className="flex-1">
                            <Link
                                to={item.to}
                                aria-label={item.aria}
                                aria-current={isActive ? 'page' : undefined}
                                className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-blue-600/20 scale-110 border border-blue-400/30'
                                        : 'hover:bg-blue-700/15 hover:scale-105'
                                    }`}
                            >
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-7 h-7 mb-1.5 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                                    aria-hidden="true"
                                />
                                <span className="text-xs font-semibold">{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}