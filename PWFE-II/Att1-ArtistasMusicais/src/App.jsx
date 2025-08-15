// src/App.jsx
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FooterIcons from "./components/FooterIcons";

export default function App() {
  return (
    <div className="relative bg-black text-white font-sans">
      <Navbar />
      <Banner />
      <FooterIcons />
    </div>
  );
}
