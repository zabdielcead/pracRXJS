import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5);
//take emite los valores de la condición que tenga despues hace el complete de la suscripción 

numeros$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
.subscribe({
    next:         val => console.log('next',val),
    complete:     ()  =>console.log('complete')   
})