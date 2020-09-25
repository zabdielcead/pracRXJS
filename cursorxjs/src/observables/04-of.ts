import {Observable, Subscriber, Observer, Subject, Subscription, of} from 'rxjs';



//operador of va emitir los valores en secuencia 1x1 de manera sincrona 
//const obs$ = of(1,2,3,4,5,6);
const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));
console.log('Inicio del obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminos la secuencia ')
);
console.log('Fin del obs$');
