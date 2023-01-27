import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Card from './pokemon/Card.jsx';
import NavBar from './assets/Navbar';

import { Alert } from 'flowbite-react';

const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=20';

function Pokedex() {
   const [pokemons, setPokemons] = useState([]);
   const [nextPage, setNextPage] = useState([]);
   const [query, setQuery] = useState('');
   const [searchInput, setSearchInput] = useState(false);
   const [alert, setAlert] = useState(false);
   const [favouriteButton, setFavouriteButton] = useState(false);

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

   return (
      <div className="App">
         <main>
            <NavBar
               name="Pokedex"
               searchState={searchInput}
               searchSetState={setSearchInput}
               favButton={favouriteButton}
               favBtnSetState={setFavouriteButton}
            />

            <div className="container mx-auto">
               <br />
               {alert === true ? (
                  <Alert
                     color="success"
                     onDismiss={function onDismiss() {
                        setAlert(false);
                     }}
                  >
                     <span>
                        <span className="font-medium">
                           {' '}
                           All pokemons has been loaded !!!
                        </span>
                     </span>
                  </Alert>
               ) : (
                  ''
               )}

               {searchInput !== false ? (
                  <div>
                     <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                           <input
                              type="search"
                              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                              placeholder={query === '' ? 'Search...' : query}
                              value={query === '' ? '' : query}
                              onChange={(event) => setQuery(event.target.value)}
                           />
                        </div>
                     </div>
                  </div>
               ) : (
                  ''
               )}

               <br />

               <div className="flex flex-wrap -mx-3 ">
                  {pokemons
                     .filter((pokemon) => {
                        if (query === '') {
                           return pokemon;
                        } else if (
                           pokemon.name
                              .toLowerCase()
                              .includes(query.toLowerCase())
                        ) {
                           return pokemon;
                        }
                     })
                     .map((pokemon, index) => (
                        <Card
                           key={pokemon.id}
                           name={pokemon.name}
                           image={
                              pokemon.sprites.other.dream_world.front_default
                           }
                           experience={pokemon.base_experience}
                           stats={pokemon.stats}
                           types={pokemon.types}
                           id={pokemon.id}
                        />
                     ))}
               </div>
               {nextPage !== null ? (
                  <button
                     onClick={handleButton}
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-sm:mx-5"
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
