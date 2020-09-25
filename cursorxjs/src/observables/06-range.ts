import {of, range, asyncScheduler} from 'rxjs';
//secuencia de numeros en base a un rango son sincronos y asincronos

//const src$ = of(1,2,3,4,5);
//const src$ = range(-1,5);
const src$ = range(-1,5,asyncScheduler);

console.log('inicios');
src$.subscribe(console.log);
console.log('fins');