/**
 * Header navigation component
 * Contains site navigation links and logo
 */
import { NavLink, Link } from 'react-router-dom'
import banner from '../assets/image.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={banner} alt="Laufey" className="h-15" />
        </Link>
        
        <div className="flex gap-2">
          <NavLink 
            to="/" 
            end 
            className={({isActive}) => 
              `px-4 py-2 transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/discography" 
            className={({isActive}) => 
              `px-4 py-2 transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            Discography
          </NavLink>
          <NavLink 
            to="/ranking" 
            className={({isActive}) => 
              `px-4 py-2 transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            Ranking
          </NavLink>
        </div>
      </nav>
    </header>
  )
}