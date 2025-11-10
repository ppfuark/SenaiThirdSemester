
import { Routes, Route } from "react-router-dom";
import { Inicial } from "../pages/Inicial";
import { DSGo } from "../pages/DSGo";
import { Missao } from "../pages/Missao";
import { Inventario } from "../pages/Inventario";
import Camera from "../components/Camera";
import CameraPage from "../pages/CameraPage"
// import { Inventario } from "../Pagina/Inventario";
// import { GeolocalizacaoMapa } from "../Componentes/GeolocalizacaoMapa";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/dsgo" element={<DSGo />} >
                <Route path="missao" element={<Missao />} />
                <Route path="inventario" element={<Inventario />} />
                <Route path="camera" element={<CameraPage/>} />
            </Route>
        </Routes>
    );
}   