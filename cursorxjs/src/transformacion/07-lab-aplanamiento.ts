


//creando el formulario

import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";


// helper
const peticionHttpLogin = ( userPass ) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass)
                .pipe(
                    pluck('response', 'token'),
                    catchError( err => of('xxx'))
                );
}

const form           = document.createElement('form');
const inputEmail     = document.createElement('input');
const inputpass      = document.createElement('input');
const submitBtn      = document.createElement('button');


// configuraciones
inputEmail.type           = 'email';
inputEmail.placeholder    = 'Email';
inputEmail.value          = 'eve.holt@reqres.in';

inputpass.type           = 'password';
inputpass.placeholder    = 'password';
inputpass.value          = 'cityslicka';

submitBtn.innerHTML      = 'Ingresar';


form.append(inputEmail, inputpass, submitBtn);
document.querySelector('body').append(form);



// Streams
const submitForm$ = fromEvent<Event>( form, 'submit')
                            .pipe(
                                tap( ev => ev.preventDefault()),
                                map( ev => ({
                                    email:    ev.target[0].value,
                                    password: ev.target[1].value,
                                })),
                                mergeMap(peticionHttpLogin),
                                //switchMap(peticionHttpLogin)
                                //exhaustMap(peticionHttpLogin)

                            );

submitForm$.subscribe(token => {
    console.log(token)
}) 
