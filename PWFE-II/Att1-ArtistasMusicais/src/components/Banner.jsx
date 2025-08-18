// src/components/Banner.jsx
import bannerImg from "../assets/Banner.jpg";
import bannerVideo from "../assets/star-bg.mp4";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end items-center">
      <video
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      />

      <img
        src={bannerImg}
        alt="Banner"
        className="relative z-10 w-[75%] h-auto object-contain"
      />
    </section>
  );
}
