

// combineLatest es una función combina los observables  y  los emite simultaneamente la salida pero combinada y rgresa un observable

import { fromEvent, merge, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';



/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


combineLatest(
        keyup$.pipe(pluck('type')), 
        click$.pipe(pluck('type')), 
      ).subscribe(console.log); */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '********';
input2.type = 'password';


document.querySelector('body').append(input1, input2);

//helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck<KeyboardEvent, string >('target', 'value')
    );
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2),

).subscribe(console.log);
