import { interval, fromEvent } from 'rxjs';
import { tap, map, take, reduce } from 'rxjs/operators';


// el operador reduce no va a mandar ningun valor hasta que complete el observable

const numbers = [1,2,3,4,5,6];
const totalReducer = (acumulador:number, valorActual:number) => {
    console.log('acumulador -valor actual',`${acumulador}-${valorActual}`);
    
    return acumulador + valorActual;
}

/* const total = numbers.reduce(totalReducer,0 );
console.log('total arr', total); */



interval(1000).pipe(
    take(6), 
    tap(console.log),
    reduce(totalReducer,2)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})