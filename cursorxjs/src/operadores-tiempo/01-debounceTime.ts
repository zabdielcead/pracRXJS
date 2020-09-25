import { fromEvent} from 'rxjs';
import { distinctUntilChanged, debounceTime, pluck } from 'rxjs/operators';


//despues  milisimas de segundo han pasado dse emitiran los valores


const click$ = fromEvent(document, 'click')

click$.pipe(
    debounceTime(3000)
);//.subscribe(console.log);

//ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log);
