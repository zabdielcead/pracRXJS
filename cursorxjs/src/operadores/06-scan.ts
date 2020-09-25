import { from ,interval, fromEvent } from 'rxjs';
import { reduce, scan,map } from 'rxjs/operators';
// el operador scan  va a mandar  valor  mientras el observable emita valor

const numbers = [1,2,3,4,5,6];
const totalAcumalador = (acumulador:number, valorActual:number) => {
    console.log('acumulador -valor actual',`${acumulador}-${valorActual}`);
    
    return acumulador + valorActual;
}

from(numbers).pipe(
    reduce(totalAcumalador, 0)
).subscribe(console.log);


from(numbers).pipe(
    scan(totalAcumalador, 0)
).subscribe(console.log);


//redux manejar el estado de mi aplicacion en un objeto
interface Usuario {
    id?:              string;
    autenticado?:     boolean;
    token?:           string;
    edad?:            number;

}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null},
    { id: 'fher', autenticado: true, token: 'ABC'},
    { id: 'fher', autenticado: true, token: 'ABC12'},
]


const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => {
        return {...acc, ...cur};
    },{edad: 3} )
);


const id$ = state$.pipe(
    map(  state => state)
)

id$.subscribe(console.log);


