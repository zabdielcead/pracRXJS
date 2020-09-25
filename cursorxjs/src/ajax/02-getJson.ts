import {ajax} from 'rxjs/ajax';

//const url= 'https://api.github.com/users?per_page=5';
const url= 'https://httpbin.org/delay/1'; // aki se ve la data que se envia



const obs$ = ajax.getJSON(url,{
    //se envian los headers de una peticion se puede ver en el navegador en Network 1 por lo regular type xhr
    'Content-Type': 'application/json',
    'mi-token':'BAC123'
});


obs$.subscribe(data => console.log('data:', data));