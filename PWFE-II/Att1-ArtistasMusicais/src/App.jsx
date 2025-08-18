import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Discography from './pages/Discography.jsx'
import Ranking from './pages/Ranking.jsx'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-[#0B132B] text-gray-100">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}