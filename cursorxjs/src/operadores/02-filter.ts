import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';



//flitra y puede mandar cierta respuesta

range(1,5).pipe(
    filter((val, i) => { 
        console.log('index', i);
      return  val % 2 === 1
    })
).subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}
const personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    } 
    
];

from( personajes ).pipe(
    filter( p => p.tipo === 'heroe' )
).subscribe(console.log);


// encadenamiento de operadores

const keyupEncadenamiento$ = fromEvent<KeyboardEvent>(document,  'keyup').pipe( //los operadores se ejecutan de arriba hacia abajo
    map( event => event.code), //recibe un keyboardevent y sale un string 
    filter( key => key === 'Enter') // solo escucha el enter
);

keyupEncadenamiento$.subscribe(console.log);

