import {Observable, Subscriber, Observer} from 'rxjs';



//para correr el proyecto npm i, npm start
console.log('Hola Mundo! carlos');


const observer:Observer<any> = {
    next: value  => console.log('next:', value),
    error: error => console.warn('obs:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(
    subscriber => {
        // crear un contador 1,2,3,4,5....
        let contador = 0;
        const intervalo = setInterval(() => {
            contador++;
            subscriber.next(contador)
            console.log('contador', contador);
        }, 1000);

        setTimeout(() => {
            subscriber.complete();
        }, 2500);
        
        return () => { // se ejecuta cuando se manda unsubscribe
            clearInterval(intervalo);
            console.log('Intervalo destruido');
        }
    }


    
);


const subs  =  intervalo$.subscribe(observer);
const subs2 =  intervalo$.subscribe(observer);
const subs3 =  intervalo$.subscribe(observer);

subs.add(subs2)
    .add(subs3);

setTimeout(() => {
    //cancelar la subscripción
   /*  subs.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe(); */
    subs.unsubscribe();
    console.log('Completado timeout');
}, 3000);