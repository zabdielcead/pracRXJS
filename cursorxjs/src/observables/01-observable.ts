import {Observable, Subscriber, Observer} from 'rxjs';


// observable es un un objeto que puede emitir valores
//para corres el proyecto npm i, npm start
console.log('Hola Mundo! carlos');


const observer:Observer<any> = {
    next: value  => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado')
};

// crear observables
//clase 13 
const obs$ = new Observable<string>(subs => {
    subs.next('hola obseervable');
    subs.next('hola obseervable dos');
    //forzar un error
   // const a  = undefined;
   // a.nombre = 'CEAD';

    subs.complete(); //indica que los subscribe despues de esto ya no los cachara los subscribe que ven el observable
    subs.next('hola obseervable tres');// ya no serán emitiendo nada
});

/* obs$.subscribe(resp => { 
    console.log(resp)
}); */


//clase14
// esto es una forma
/* obs$.subscribe(
    valor => console.log('next:', valor),
    error => console.warn('error:', error),
    ()    => console.info('Completado')
); */

obs$.subscribe(observer);



