

import { ajax, AjaxError} from 'rxjs/ajax';
import { distinctUntilChanged, debounceTime, pluck, map, catchError } from 'rxjs/operators';
import { of} from 'rxjs';

// fetch api



const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (resp: Response) => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }

        return resp;
}


const atrapaError = (err: AjaxError) => {
     //puede emitir un observable
        console.warn('error en:', err);
        return of([]);
    
}
const fetchPromesa = fetch(url);


/* fetchPromesa
    .then(resp => resp.json())
    .then(console.log)
    .catch(); */



   /*  fetchPromesa
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(console.log)
    .catch();
 */


 ajax(url).pipe(
     pluck('response'),
     catchError( atrapaError)
     //map(resp => resp.response)
 ).subscribe(users => console.log('usuarios', users));


