
import { fromEvent } from 'rxjs';
import { first, tap, map, takeWhile } from 'rxjs/operators';

// takeWhile permite recibir valores mientras cumpla la condición 

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    map(({x,y}) => ({x,y})),
    //takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)
)
.subscribe({
     next :     val => console.log('next:', val),
     complete:  () => console.log('complete')
});