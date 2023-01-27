import Progress from './Progress';
import Type from './Type';
import { Card } from 'flowbite-react';

export default function Pokemon(props) {
   return (
      <div
         className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
         key={Math.random()}
      >
         <a
            href="#"
            className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
         >
            <div className="relative pb-48 overflow-hidden">
               <img
                  className="absolute inset-0 h-full max-w-full object-fill mx-auto px-6 py-5"
                  src={props.image}
                  alt={props.name}
               />
            </div>

            <div className="p-4">
               {props.types.map((item, index) => (
                  <Type
                     nameType={item.type.name}
                     key={index + '-' + Math.random()}
                  />
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
                  <>
                     <Progress
                        key={Math.random()}
                        name={st.stat.name}
                        stat={st.base_stat}
                     />
                  </>
               ))}
            </div>
         </a>
      </div>
   );
}
