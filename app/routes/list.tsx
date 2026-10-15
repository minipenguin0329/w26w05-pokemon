import type { Route } from "./+types/list"
import { Link } from "react-router"

 const pokemons = [
    { id: 1, name: "이상해씨", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { id: 4, name: "파이리", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
    { id: 7, name: "꼬부기", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
    { id: 25, name: "피카츄", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { id: 39, name: "니드런♀", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png" },
    { id: 52, name: "니드런♂", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png" },
    { id: 133, name: "이브이", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
    { id: 150, name: "뮤츠", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
    { id: 151, name: "뮤", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
    { id: 152, name: "치코리타", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png" },
  ]

export function meta({}: Route.MetaArgs) {
  return [
    { title: "포켓몬" },
    { name: "description", content: "포켓몬 도감" },
  ]
}

export default function List() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-600">
            POKÉDEX
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            포켓몬 목록
          </h2>
          <p className="mt-2 text-slate-500">
            좋아하는 포켓몬을 만나보세요.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {pokemons.map((pokemon) => (
            <article
              key={pokemon.id}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <p className="text-xs font-semibold tracking-wider text-slate-400">
                #{String(pokemon.id).padStart(3, "0")}
              </p>

              <div className="my-4 flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  loading="lazy"
                  className="h-4/5 w-4/5 object-contain drop-shadow-md"
                />
              </div>

              <p className="text-center text-lg font-bold text-slate-800">
                {pokemon.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
