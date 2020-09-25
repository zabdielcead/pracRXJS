import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';



const letras$ = of('a', 'b', 'c');


letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ), 
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('Complete')
// });


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );




/*
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GitHubUser } from './interfaces/github-user.interface';
import { GithubUsersResp } from './interfaces/github-users.interface';


// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GitHubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}



// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    //mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GitHubUser[]>('items')
).subscribe( mostrarUsuarios );


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);




*/