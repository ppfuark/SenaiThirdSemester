import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu';

export function DSGo() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <Outlet />
            <Menu />
        </main>
    );
}
