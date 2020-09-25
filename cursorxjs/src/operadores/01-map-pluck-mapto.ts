import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';
// operadores : filtran la información y emitir (la salida) lo que nos interesa 



//operador map
//extraer información o transformarla


range(1,5)
.pipe(
    map<number, string>(val => {
        return (val * 10).toString()
    } )
)
.subscribe( console.log);

// map 
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupcode$ = keyup$.pipe(
    map( event => event.code )
)



keyupcode$.subscribe( code =>  console.log('keyupmap' ,code) );

//pluck
const keyupPluck$ = keyup$.pipe(//obtiene una propiedad del objeto que se recibe
    //pluck('key')
    pluck('target', 'baseURI')// en este caso target.baseURI
)

keyupPluck$.subscribe( code =>  console.log('keyuppluck' ,code) );

// mapto transforma la entrada en una salida especifica 

const keyupMAPTO$ = keyup$.pipe(
    mapTo('tecla presionada') // puedo regresar algunas objetos array o valores
)

keyupMAPTO$.subscribe( code =>  console.log('mapTo' ,code) );
