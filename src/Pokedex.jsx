import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Type from './pokemon/Type';
import Progress from './pokemon/Progress';

const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=50';

function Pokedex() {
   const [pokemons, setPokemons] = useState([]);
   const [nextPage, setNextPage] = useState([]);

   const handleButton = () => {
      axios.get(nextPage).then((response) => {
         // set next page
         setNextPage(response.data.next);

         // set basic data
         let pokemonsData = response.data.results;

         // save in promise the url of the each pokemon
         let pokemonsPromise = pokemonsData.map((pokemonData) =>
            axios.get(pokemonData.url)
         );

         Promise.all(pokemonsPromise).then((responses) => {
            let pokemons = responses.map((response) => response.data);
            setPokemons((prev) => [...prev, ...pokemons]);
         });
      });
   };

   // fetch data from PokeApi
   useEffect(() => {
      axios.get(urlApi).then((response) => {
         setNextPage(response.data.next);

         let pokemonsData = response.data.results;
         let pokemonsPromise = pokemonsData.map((pokemonData) =>
            axios.get(pokemonData.url)
         );

         Promise.all(pokemonsPromise).then((responses) => {
            let pokemons = responses.map((response) => response.data);
            setPokemons(pokemons);
         });
      });
   }, []);

   return (
      <div className="App">
         <main>
            <div className="container mx-auto">
               <h1 className="text-3xl font-bold py-4">Pokedex</h1>

               <div className="flex flex-wrap -mx-3 ">
                  {pokemons.map((pokemon, index) => (
                     <div
                        key={index /*pokemon.id */}
                        className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
                     >
                        <a
                           href="#"
                           className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                        >
                           <div className="relative pb-48 overflow-hidden">
                              <img
                                 className="absolute inset-0 h-full max-w-full object-fill mx-auto px-6 py-5"
                                 src={
                                    pokemon.sprites.other.dream_world
                                       .front_default
                                 }
                                 alt={pokemon.name}
                              />
                           </div>

                           <div className="p-4">
                              {pokemon.types.map((item, index) => (
                                 <Type
                                    key={`-${index}`}
                                    name={item.type.name}
                                 />
                              ))}

                              <h2 className="mt-2 mb-2  font-bold">
                                 {pokemon.name
                                    .charAt(0)
                                    .toUpperCase()
                                    .concat(pokemon.name.slice(1))}
                              </h2>

                              <p className="text-sm">
                                 <b>Experience:</b> {pokemon.base_experience}{' '}
                                 <br />
                                 {pokemon.stats.map((st, index) => (
                                    <>
                                       <Progress
                                          key={index}
                                          name={st.stat.name}
                                          stat={st.base_stat}
                                       />
                                    </>
                                 ))}
                              </p>
                           </div>
                        </a>
                     </div>
                  ))}
               </div>

               {nextPage !== null ? (
                  <button
                     onClick={handleButton}
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                     Load more!
                  </button>
               ) : (
                  'Not more pokemons'
               )}
               <br />
               <br />
               <br />
            </div>
         </main>
      </div>
   );
}

export default Pokedex;
