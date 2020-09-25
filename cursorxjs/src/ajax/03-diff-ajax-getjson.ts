import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs'
import { catchError } from 'rxjs/operators';

//const url= 'https://api.github.com/users?per_page=5';
const url= 'https://xhttpbin.org/delay/1'; // aki se ve la data que se envia

const manejaError = (resp: AjaxError) => {
 console.warn('error:', resp.message);
 return of({
     ok: false,
     usuarios:[]
 });
}

const obs$ = ajax.getJSON(url,{
    //se envian los headers de una peticion se puede ver en el navegador en Network 1 por lo regular type xhr
    'Content-Type': 'application/json',
    'mi-token':'BAC123'
}).pipe(
    catchError(manejaError)
);


const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe(data => console.log('data:', data));
obs2$.subscribe(data => console.log('ajax:', data));

const obs3$ = ajax.getJSON(url); // de esta forma se completa es mejor
obs3$.pipe(
    catchError(manejaError)
).subscribe({
    next:      val  => console.log('next', val),
    error:     err => console.warn('error en subs:', err),
    complete:  () => console.log('complete')
});


