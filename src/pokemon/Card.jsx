import { Progress } from './Progress.jsx';
import { Type } from './Type';
import { saveToStorage } from '../storage/index.js';

export const Card = (props) => {
   const handleFavourite = (id) => {
      if (props.favouriteState.includes(id)) {
         // delete from state
         const aux = [...props.favouriteState];
         var i = aux.indexOf(id);
         aux.splice(i, 1);
         props.favouriteSetState(aux);
         saveToStorage(aux);
      } else {
         props.favouriteSetState([...props.favouriteState, id]);
         saveToStorage([...props.favouriteState, id]);
      }
   };

   return (
      <div
         className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 max-sm:mx-4"
         key={props.id}
      >
         <div className="c-card block bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
            <>
               <div className="relative pb-48 overflow-hidden">
                  {props.favouriteState.includes(props.id) ? (
                     <button
                        className="absolute right-5 top-5 z-10 rounded-full bg-white p-2.5 text-black-400 transition hover:text-red-800"
                        onClick={() => handleFavourite(props.id)}
                        key={props.id}
                     >
                        <span className="sr-only">Favourite</span>

                        <svg
                           key={props.id}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="w-5 h-5 fill-red-500"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                           />
                        </svg>
                     </button>
                  ) : (
                     <button
                        className="absolute right-5 top-5 z-10 rounded-full bg-white p-2.5 text-gray-900 transition hover:text-red-800"
                        onClick={() => handleFavourite(props.id)}
                        key={props.id}
                     >
                        <span className="sr-only">Favourite</span>

                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="w-5 h-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                           />
                        </svg>
                     </button>
                  )}

                  <img
                     className="absolute inset-0 h-full max-w-full object-fill mx-auto px-6 py-5"
                     src={props.image}
                     alt={props.name}
                  />
               </div>

               <div className="p-4" key={props.id}>
                  {props.types.map((item, index) => (
                     <Type nameType={item.type.name} key={index} id={index} />
                  ))}

                  <h2 className="mt-5 mb-2  font-bold text-2xl ">
                     {props.name
                        .charAt(0)
                        .toUpperCase()
                        .concat(props.name.slice(1))}
                  </h2>

                  <p className="text-base ">
                     <b>Experience:</b> {props.experience} <br />
                  </p>
                  {props.stats.map((st, index) => (
                     <div key={index}>
                        <Progress
                           key={index}
                           name={st.stat.name}
                           stat={st.base_stat}
                           id={index}
                        />
                     </div>
                  ))}
               </div>
            </>
         </div>
      </div>
   );
};
