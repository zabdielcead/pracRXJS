import {asyncScheduler} from 'rxjs';

//asyncScheduler crea una suscripción y no un observable

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`hola ${nombre}`);


//asyncScheduler.schedule(saludar, 2000); 
// es parecido a un setTimeout
//asyncScheduler.schedule(saludar2, 2000, 'CEADs'); // el tercer argumento seria lo que se manda a la función 


//es parecido al interval
const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1,1000);
}, 3000, 0);


setTimeout(() => {
    subs.unsubscribe();
}, 6000);

