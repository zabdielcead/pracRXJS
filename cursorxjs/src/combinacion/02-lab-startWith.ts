import { ajax } from "rxjs/ajax";
import { startWith } from 'rxjs/operators';

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');

loadingDiv.innerHTML = 'CARGANDO...';


const body = document.querySelector('body');



// steam
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe( resp =>{
        if(resp === true){
            body.append(loadingDiv)
        }else{
            document.querySelector('.loading').remove();
        }    

        console.log(resp);
    })