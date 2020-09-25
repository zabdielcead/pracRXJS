import { interval, fromEvent, of , from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


// distictUntilChange emite valores siempre y cuando la emision anterior no es la misma

const numeros$ = of<number|string>(1,1,'1',3,3,4,5, 4,5,2 ,'1');


numeros$.pipe(
    distinctUntilChanged()// aplica el oprador ===
).subscribe(console.log);


interface Personaje {
    nombre: string
}


const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Willy'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zoe'
    }
];

from(personajes).pipe(
    distinctUntilChanged((ant, actual) => ant.nombre === actual.nombre) //emisiones unicas
).subscribe(console.log);