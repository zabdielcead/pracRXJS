import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';


// merge es una funcion y es la combinación de varios observables y el resultado es la combinación de todos simultaneamente 

// cuando los observavblkes se completan se dispara el complete de la subscripción 


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


merge(
        keyup$.pipe(pluck('type')), 
        click$.pipe(pluck('type')), 
      ).subscribe(console.log);