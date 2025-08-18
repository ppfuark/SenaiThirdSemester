/**
 * Home page component with artist information
 * Displays Laufey's biography and key facts
 */
import Banner from '../components/Banner.jsx'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <Banner />
      
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">About the Artist</h1>
        <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
          <strong>Laufey Lín Bing Jónsdóttir</strong> (Reykjavík, 1999) is an Icelandic-Chinese singer, 
          songwriter and multi-instrumentalist. She blends <em>jazz pop</em>, <em>traditional pop</em> 
          and classical elements. Winner of the 2024 GRAMMY for <em>Bewitched</em>. Her debut EP is 
          <em>Typical of Me</em> (2021), followed by the album <em>Everything I Know About Love</em> (2022).
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-gray-800 p-6 ">
            <h2 className="text-xl font-semibold mb-4">Quick Facts</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Instruments: voice, piano, guitar and cello</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Label: AWAL • Active: 2020–present</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Collaborations with orchestras (e.g. Philharmonia Orchestra)</span>
              </li>
            </ul>
          </article>
          
          <article className="bg-gray-800 p-6 ">
            <h2 className="text-xl font-semibold mb-4">Awards</h2>
            <p className="text-gray-300 mb-4">
              GRAMMY 2024 – <strong>Best Traditional Pop Vocal Album</strong> for <em>Bewitched</em>.
            </p>
            <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Highlight
            </span>
          </article>
        </div>
      </section>
    </div>
  )
}