export default function Type(props) {
   const classBasic =
      'inline-block mx-1 px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs ';

   switch (props.name) {
      case 'fighting':
         var color = 'bg-indigo-200 text-indigo-800';
         break;

      case 'flying':
         var color = 'bg-sky-200 text-sky-800';
         break;

      case 'poison':
         var color = 'bg-violet-200 text-violet-800';
         break;

      case 'ground':
         var color = 'bg-rose-200 text-rose-800';
         break;

      case 'rock':
         var color = 'bg-stone-200 text-stone-800';
         break;

      case 'ghost':
         var color = 'bg-fuchsia-200 text-fuchsia-800';
         break;

      case 'steel':
         var color = 'bg-slate-200 text-slate-800';
         break;

      case 'fire':
         var color = 'bg-orange-200 text-orange-800';
         break;

      case 'water':
         var color = 'bg-cyan-200 text-cyan-800';
         break;

      case 'grass':
         var color = 'bg-green-200 text-green-800';
         break;

      case 'electric':
         var color = 'bg-amber-200 text-amber-800';
         break;

      case 'psychic':
         var color = 'bg-emerald-200 text-emerald-800';
         break;

      case 'ice':
         var color = 'bg-blue-200 text-blue-800';
         break;

      case 'dragon':
         var color = 'bg-amber-200 text-amber-800';
         break;

      case 'dark':
         var color = 'bg-gray-200 text-gray-800';
         break;

      case 'fairy':
         var color = 'bg-pink-200 text-pink-800';
         break;

      case 'bug':
         var color = 'bg-amber-200 text-amber-800';
         break;

      default:
         var color = 'bg-neutral-200 text-neutral-800';
         break;
   }

   return <span className={classBasic + color}>{props.name}</span>;
}
