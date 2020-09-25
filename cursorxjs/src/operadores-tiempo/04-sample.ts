import { fromEvent, interval } from 'rxjs';
import { map, sampleTime, sample} from 'rxjs/operators';


const interval$ = interval(500);

const click$ = fromEvent(document, 'click');

// emite un valor el interval pero hasta que de click emitira el valor por sample 

interval$.pipe(
        sample(click$)// es como una muestra del observable en ese momento
).subscribe(console.log); 