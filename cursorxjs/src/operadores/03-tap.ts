import { range, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numero$ = range(1,5);

numero$.pipe(
    tap(x => {
            console.log('antes', x)
        }
    ),
    map( val => (val * 10).toString()),
    tap({
        next: valor  => console.log('despues', valor),
        complete: () => console.log('se termino todo')

    })
    //tap(x => console.log('despues',x))
).subscribe(val => console.log('susb', val));
