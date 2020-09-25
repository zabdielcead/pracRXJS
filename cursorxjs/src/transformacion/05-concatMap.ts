


// concatena los observables resultantes que fluyen a tareves del operador, se ejecutan uno despues del otro 

import { fromEvent, interval } from "rxjs";
import { take, switchMap, concatMap } from 'rxjs/operators';


const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent(document, 'click');


click$.pipe(
    concatMap(() => interval$)
).subscribe(console.log)