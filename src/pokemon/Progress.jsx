export default function Progress(props) {
   switch (props.name) {
      case 'hp':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500';

         var name = 'HP';

         var percentage = props.stat + '%';

         break;

      case 'attack':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-sky-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500';

         var name = 'Attack';

         var percentage = props.stat + '%';
         break;

      case 'defense':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-red-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500';

         var name = 'Defense';

         var percentage = props.stat + '%';
         break;

      case 'special-attack':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-indigo-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500';

         var name = 'Special Attack';

         var percentage = props.stat + '%';
         break;

      case 'special-defense':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-amber-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500';

         var name = 'Special Defense';

         var percentage = props.stat + '%';
         break;

      case 'speed':
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-fuchsia-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-fuchsia-500';

         var name = 'Speed';

         var percentage = props.stat + '%';
         break;

      default:
         var classDiv =
            'overflow-hidden h-4 mb-4 text-xs flex rounded bg-neutral-200';

         var classProgress =
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-neutral-500';

         var name = 'Unknow';
         break;
   }

   return (
      <div className="relative pt-1" key={Math.random()}>
         <b>{name}</b>
         <div className={classDiv}>
            <div style={{ width: percentage }} className={classProgress}>
               {props.stat > 100 ? '100' : props.stat}
            </div>
         </div>
      </div>
   );
}
