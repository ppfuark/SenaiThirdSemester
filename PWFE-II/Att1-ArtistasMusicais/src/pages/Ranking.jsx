/**
 * Music ranking table component with sorting functionality
 * Displays Laufey's top songs with sortable columns
 */
import { useState, useMemo } from 'react'

export const songs = [
  { rank: 1, title: "From The Start", streams: "120M", year: 2023 },
  { rank: 2, title: "Falling Behind", streams: "85M", year: 2022 },
  { rank: 3, title: "Valentine", streams: "78M", year: 2023 },
  { rank: 4, title: "Let You Break My Heart Again", streams: "65M", year: 2021 },
  { rank: 5, title: "Promise", streams: "60M", year: 2023 },
  { rank: 6, title: "Street by Street", streams: "55M", year: 2021 },
  { rank: 7, title: "Beautiful Stranger", streams: "50M", year: 2022 },
  { rank: 8, title: "Dreamer", streams: "45M", year: 2022 },
  { rank: 9, title: "Fragile", streams: "40M", year: 2023 },
  { rank: 10, title: "Like The Movies", streams: "35M", year: 2022 }
]

/**
 * Converts stream count string to numeric value
 * @param {string} str - Stream count string (e.g. "120M")
 * @returns {number} - Numeric value of streams
 */
function parseStreams(str) {
  const m = String(str).toUpperCase()
  if(m.endsWith('M')) return parseFloat(m)*1_000_000
  if(m.endsWith('K')) return parseFloat(m)*1_000
  return Number(m)
}

export default function Ranking() {
  const [sortKey, setSortKey] = useState('rank')

  const filtered = useMemo(() => {
    return songs.sort((a,b) => {
      if(sortKey === 'rank') return a.rank - b.rank
      if(sortKey === 'title') return a.title.localeCompare(b.title)
      if(sortKey === 'streams') return parseStreams(b.streams) - parseStreams(a.streams)
      if(sortKey === 'year') return b.year - a.year
      return 0
    })
  }, [sortKey])

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-white">Music Ranking</h1>
        <p className="text-gray-400">Laufey's top tracks according to class data</p>
      </header>
      
      <div className="flex flex-wrap gap-4">
        <select
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="rank">Rank</option>
          <option value="title">Title (A-Z)</option>
          <option value="streams">Streams</option>
          <option value="year">Year</option>
        </select>
      </div>
      
      <div className="overflow-x-auto ">
        <table className="w-full text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Streams</th>
              <th className="px-6 py-3 text-left">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filtered.map(song => (
              <tr key={song.title} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">{song.rank}</td>
                <td className="px-6 py-4 font-medium">{song.title}</td>
                <td className="px-6 py-4">{song.streams}</td>
                <td className="px-6 py-4">{song.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}