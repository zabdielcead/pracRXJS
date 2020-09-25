import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

//post y put trabajan igual 
/* ajax.post(url, {
    id:1,
    nombre: 'Fernando'
},{
    'mi-token':'ABC'
}).subscribe(console.log);
 */

//otra forma
ajax({
    url:url,
    method: 'POST',
    headers: {
        'mi-token':'abc134'
    },
    body:{
        id:1,
        nombre: 'Fernando'
    }
}).subscribe(console.log);
