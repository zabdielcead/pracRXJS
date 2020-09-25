


// forkJoin recibe varios observables, hasta que sse completen los observablñes va emitir el valor de los valores en un arreglo

import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';


const numeros$ = of(1,2,3,4)
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3500));

/* forkJoin(
    numeros$,
    interval$,
    letras$
).subscribe(console.log); */


/* forkJoin(
    numeros$,
    interval$,
    letras$
).subscribe(resp => {
    console.log('nmeros', resp[0]);
    console.log('interval', resp[1]);
    console.log('letras', resp[2]);
}); */


/* forkJoin({
    numeros$,
    interval$,
    letras$
}).subscribe(resp => {
    console.log('nmeros', resp.numeros$);
    console.log('interval', resp.interval$);
    console.log('letras', resp.letras$);
}); */

forkJoin({
    num:numeros$,
    int:interval$,
    letter:letras$
}).subscribe(resp => {
    console.log('nmeros', resp.num);
    console.log('interval', resp.int);
    console.log('letras', resp.letter);
});


