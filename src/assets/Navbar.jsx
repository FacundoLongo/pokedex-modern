export default function NavBar(props) {
   if (props.favButton) {
      var classFav = 'hover:text-red-800 fill-red-500';
   } else {
      var classFav = 'hover:text-red-600';
   }

   if (props.searchState === true) {
      var classSearch = 'hover:text-blue-600 text-blue-600';
   } else {
      var classSearch = 'hover:text-blue-400';
   }

   return (
      <header
         aria-label="Site Header"
         className="sticky top-0 z-20 w-full px-2 py-2 bg-white sm:px-3 shadow-md"
      >
         <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8 ">
            <div className="flex items-center">
               <a href="#" className="flex">
                  <h2 className="px-4 font-bold text-xl">{props.name}</h2>
               </a>
            </div>

            <div className="flex flex-1 items-center justify-end">
               <div className="ml-8 flex items-center">
                  <div className="flex items-center ">
                     <span>
                        <div
                           className="block border-b-4 border-transparent p-4 "
                           style={{ marginTop: '5px' }}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className={`w-6 h-6 ${classFav}`}
                              onClick={() =>
                                 props.favBtnSetState(!props.favButton)
                              }
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                           </svg>

                           <span className="sr-only"> Favorito </span>
                        </div>
                     </span>

                     <span>
                        <a
                           href="#"
                           className="block border-b-4 border-transparent p-4"
                           style={{ marginTop: '5px' }}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className={`w-6 h-6 ${classSearch}`}
                              onClick={() =>
                                 props.searchSetState(!props.searchState)
                              }
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                              />
                           </svg>

                           <span className="sr-only">Search</span>
                        </a>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
