import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');




click$.pipe(
    tap<MouseEvent>(res =>console.log('tap',res)),
    map(event => ({
        clientY: event.clientY,
        clientX: event.clientY,
    })),
    first(event => event.clientY >= 150)
    //first<MouseEvent>(event => event.clientY >= 150) //va obtener el primer valor lo demas ya no emitira
).subscribe({
    next:         val => console.log('next:', val),
    complete:     () =>  console.log('complete')    
});