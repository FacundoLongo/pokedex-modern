export default function NavBar(props) {
   return (
      <header
         aria-label="Site Header"
         className="sticky top-0 z-20 w-full px-2 py-2 bg-white sm:px-3 shadow-md"
      >
         <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8 ">
            <div className="flex items-center">
               <a href="#" className="flex">
                  <h2 className="px-4 font-bold text-lg">{props.name}</h2>
               </a>
            </div>

            <div className="flex flex-1 items-center justify-end">
               <div className="ml-8 flex items-center">
                  <div className="flex items-center ">
                     <span>
                        <a
                           href="#"
                           className="block border-b-4 border-transparent p-4 "
                           style={{ marginTop: '5px' }}
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 hover:text-blue-600"
                           >
                              <path
                                 strokeLinejoin="round"
                                 d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                           </svg>

                           <span className="sr-only"> Favorito </span>
                        </a>
                     </span>

                     <span>
                        {props.state === true ? (
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
                                 className="w-6 h-6 hover:text-blue-600 text-blue-800"
                                 onClick={() => props.setState(!props.state)}
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                 />
                              </svg>

                              <span className="sr-only">Buscador</span>
                           </a>
                        ) : (
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
                                 className="w-6 h-6 hover:text-blue-600"
                                 onClick={() => props.setState(!props.state)}
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                 />
                              </svg>

                              <span className="sr-only">Buscador</span>
                           </a>
                        )}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
