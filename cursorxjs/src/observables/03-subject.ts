import {Observable, Subscriber, Observer, Subject, Subscription} from 'rxjs';


const observer:Observer<any> = {
    next: value  => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()),1000);

    return () => {
                clearInterval(intervalID);
                console.log('Intervalo destruido');
    }    
});

/* const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd)); */

//si quisieramos el mismo valor en subs1 y subs2 

/*
    subject
    1- Casteo multiple
    2- Tambien es un observer
    3- tiene next error y complete
*/
const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe(subject$);

//los dos 
//const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd));
//const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);
/*
Cuando la data es producida por el observable en si mismo es considerado un cold observable.
Pero cuando la data es producida Fuera del observable es llamado hot observable
*/

setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();
},3500);