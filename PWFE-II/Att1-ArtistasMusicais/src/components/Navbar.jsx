// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4 text-white z-20 font-serif">
      <div className="flex space-x-6 text-sm uppercase">
        <a href="#">Shop</a>
        <a href="#">Signup</a>
        <a href="#">Tour</a>
        <a href="#">Music</a>
        <a href="#">Videos</a>
      </div>
      <h1 className="text-3xl font-bold font-cursive">Laufey</h1>
      <div className="flex space-x-6 text-sm uppercase">
        <a href="#">The Laufey Foundation</a>
        <a href="#">Mei Mei The Bunny</a>
      </div>
    </nav>
  );
}
