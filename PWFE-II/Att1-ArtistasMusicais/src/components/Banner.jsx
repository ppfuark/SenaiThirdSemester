/**
 * Banner component with video background
 * Displays artist promotional image
 */
import bannerImg from '../assets/banner.jpg'
import bannerVideo from '../assets/star-bg.mp4'

export default function Banner() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <video
        src={bannerVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        aria-hidden="true"
      />
      <img
        src={bannerImg}
        alt="Laufey artist banner"
        className="relative z-10 w-full max-w-4xl object-contain"
      />
    </section>
  )
}