import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
// un uso comun del fork join sonhacer varias peticiones ajax simultaneas

const GITHUB_API_URL  = 'https://api.github.com/users';
const GITHUB_USER     = 'zabdielcead';



forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
       // `${GITHUB_API_URL}/${GITHUB_USER}/repos12`// para cachar el error
       `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ),

}).pipe(
    catchError(err => of(err.message))
)
.subscribe(console.log);

