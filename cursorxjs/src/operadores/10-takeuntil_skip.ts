import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';



//takeUntil: operador recibe como argumento otro observable sigue recibiendo valores y emitelos hastaque el segundo observabl emita su valor

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
const click$   = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1), //despues de un click va emitir valores
    tap(() => console.log('despues de  skip')),
);


counter$.pipe(
    takeUntil(click$)
)
.subscribe({
    next:     val => console.log('next', val),
    complete: ()  => console.log('Complete ')
});

//skip: salta u omitir x cantidades iniciales emisiones del observable una ves pasando de ese limite va emitir valores  del 
//operador

