export const Footer = () => {
   return (
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 flex justify-between">
         <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
            Made by{' '}
            <a
               href="https://github.com/FacundoLongo"
               className="text-black-800"
            >
               <b>Facundo Longo</b>
            </a>
            .
         </span>

         <span>
            <a
               href="https://github.com/FacundoLongo/pokedex-modern"
               className="mr-4 hover:underline md:mr-6"
               target="_BLANK"
            >
               Open in GitHub
            </a>
         </span>
      </footer>
   );
};
