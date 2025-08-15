// src/components/Banner.jsx
import bannerImg from "../assets/Banner.jpg"
import bannerVideo from "../assets/star-bg.mp4"

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/* Imagem sobre o vídeo */}
      <img
        src={bannerImg}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-contain z-10"
      />
    </section>
  );
}
