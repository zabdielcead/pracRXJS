import { fromEvent, interval } from 'rxjs';
import { map, sampleTime, sample, auditTime, tap } from 'rxjs/operators';


// auditTime emite el ultimo valor que a emitido el observable en un periodo de tiempo determinado el que lo agarra primero dentro del lapso




const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe(console.log); 
