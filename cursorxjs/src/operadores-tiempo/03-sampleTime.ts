import { fromEvent } from 'rxjs';
import { map, sampleTime} from 'rxjs/operators';


// sampletime nos da el ultimo valor emitido en un periodo de tiempo
// si no se emite ningun valor en ese periodo de tiempo no emite nada

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    sampleTime(2000),
    map(({x,y}) => ({
        x,y
    }) )
)
.subscribe(console.log);