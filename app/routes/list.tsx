import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router"
import type { Route } from "./+types/list"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "포켓몬" },
    { name: "description", content: "포켓몬 도감" },
  ]
}

type Pokemon = {
  id: number
  name: string
  image: string
}

type PokemonResult = {
  name: string
  url: string
}

export default function List() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get<{ results: PokemonResult[] }>(
          "https://pokeapi.co/api/v2/pokemon?limit=20",
          { timeout: 10000 }
        )

        const pokemonData: Pokemon[] = response.data.results.map(
          ({ name, url }) => {
            const id = Number(url.split("/").filter(Boolean).pop())

            return {
              id,
              name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }
          }
        )

        setPokemons(pokemonData)
      } catch (error) {
        console.error("포켓몬 데이터 에러: ", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center text-xl font-semibold text-slate-900 animate-pulse">
        로딩 중…
      </div>
    )
  }

  if (pokemons.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center text-xl font-semibold text-slate-900">
        포켓몬 데이터를 불러오지 못했습니다.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">
        포켓몬 목록
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/detail/${pokemon.id}`}
            className="bg-white rounded-xl shadow hover:shadow-md transition
                       p-4 flex flex-col items-center gap-2
                       border border-slate-200 hover:border-yellow-400"
          >
            <img
              className="w-24 h-24"
              src={pokemon.image}
              alt={pokemon.name}
            />
            <p className="font-semibold text-slate-700">
              {pokemon.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}