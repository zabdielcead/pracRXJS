import { interval, fromEvent, of , from } from 'rxjs';
import { distinct } from 'rxjs/operators';


// distinct si ya se emitio un valor y despues se emite un valor igual lo bloquea solo se emite un valor a la vez

const numeros$ = of<number|string>(1,1,'1',3,3,4,5, 4,5,2 ,'1');


numeros$.pipe(
    distinct()// aplica el oprador ===
).subscribe(console.log);

interface Personaje {
    nombre: string
}


const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Zoe'
    }
];

from(personajes).pipe(
    distinct(p => p.nombre) //emisiones unicas
).subscribe(console.log);