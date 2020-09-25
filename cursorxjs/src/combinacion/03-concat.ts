import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

// concat es una funcion que le entran observables pero uno a uno hasta que termine uno entra el otro 


const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(9)
).subscribe(console.log);