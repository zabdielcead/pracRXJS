
import {interval, timer} from 'rxjs';
//emite una secuencia de numeros en un intervalo de tiempo 


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);

const observer = {
    next: val =>  console.log('next:', val),
    complete: () => console.log('complete')
}

const interval$ = interval(1000);
//const timer$ = timer(2000,1000);// crear un interval que inicia en 2 segundos

const timer$ = timer(hoyEn5);// emitio el valor en un periodo de tiempo se puede programar el tiempo

console.log('inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');

// timer despues del tiempo se emitira un valor  y termina