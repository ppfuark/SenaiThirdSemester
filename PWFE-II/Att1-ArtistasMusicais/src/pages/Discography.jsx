/**
 * Discography page component
 * Displays Laufey's major album releases
 */
import typical from '../assets/albums/typical-of-me.jpg'
import eikal from '../assets/albums/everything-i-know-about-love.jpg'
import bewitched from '../assets/albums/image.png'

const albums = [
  { 
    title: 'Typical of Me (EP)', 
    year: 2021, 
    cover: typical, 
    type: 'EP', 
    notes: 'Debut EP with jazz pop sound' 
  },
  { 
    title: 'Everything I Know About Love', 
    year: 2022, 
    cover: eikal, 
    type: 'Album', 
    notes: 'Debut album; themes of growth and affection' 
  },
  { 
    title: 'Bewitched', 
    year: 2023, 
    cover: bewitched, 
    type: 'Album', 
    notes: '2024 GRAMMY Award winner' 
  }
]

export default function Discography() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-white">Discography</h1>
        <p className="text-gray-400">Major official releases</p>
      </header>
      
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map(album => (
          <article key={album.title} className="bg-gray-800 overflow-hidden hover:translate-y-1 transition-transform">
            <img 
              src={album.cover} 
              alt={`${album.title} cover`} 
              className="w-full aspect-square object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{album.title}</h2>
              <p className="text-gray-400">{album.year} • {album.type}</p>
              <p className="text-gray-300">{album.notes}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}