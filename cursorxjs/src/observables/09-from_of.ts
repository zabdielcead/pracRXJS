
import {of, from} from 'rxjs';

/*

of = toma argumentos y genra una secuencia 
from = array, promise, iterable, observable

*/



const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}


//const source$ = from([1,2,3,4,5]); /muchas emisiones del arreglo /
//const source$ = of([1,2,3,4,5]); // solo se hace una emisión del valor un next


//const source$ = from('CEAD');


const source$ = from( fetch('https://api.github.com/users/klerith'));


 source$.subscribe(async(resp) => {
    console.log(resp.url);
    const dataResp = await resp.json();
    console.log('dataResp',dataResp);
});

 

source$.subscribe(observer);