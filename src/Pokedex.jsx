import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Pokemon from './pokemon/Pokemon.jsx';
import { Card } from 'flowbite-react';

const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=20';

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
                     <Pokemon
                        key={index}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        experience={pokemon.base_experience}
                        stats={pokemon.stats}
                        types={pokemon.types}
                     />
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
