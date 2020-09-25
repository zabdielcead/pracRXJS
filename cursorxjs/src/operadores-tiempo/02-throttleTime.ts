import { fromEvent, asyncScheduler } from 'rxjs';
import { distinctUntilChanged,throttleTime, debounceTime, pluck } from 'rxjs/operators';
//throttleTime llega un valor y lo emite y lo deja pasar y va esperar un periodo de tiempo y hasta que se cumpla el tiempo 
//emitira el sigueinte valor

const click$ = fromEvent(document, 'click')

click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

//ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler,{
        leading: true, //si escucha el primer elemento -valor
        trailing: true // si escucha el ultimo elemento-valor
    }),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log);


// se puede configurar el throttleTime para recibir el primero y el ultimo
