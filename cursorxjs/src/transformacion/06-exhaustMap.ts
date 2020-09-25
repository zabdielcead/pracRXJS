


//exhaustMap solo mantiene una suscripción activa antes de emitir una nueva suscripción 
import { fromEvent, interval } from "rxjs";
import { take, switchMap, concatMap, exhaustMap } from 'rxjs/operators';


const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent(document, 'click');


click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log)