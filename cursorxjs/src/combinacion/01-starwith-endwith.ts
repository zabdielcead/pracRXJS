


//startwith es un observable que va emitir un valor que nosotros queramos

import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";


const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

numeros$.subscribe(console.log);




//endwith antes de que complete el observable va emitir el valor que se le manda

const numeros2$ = of(1,2,3).pipe(
    endWith(4)
);

numeros2$.subscribe(console.log);
