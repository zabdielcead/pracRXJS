import { from } from 'rxjs';
import { filter, scan, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{
  
    const totalAcumalador = (acumulador:number, valorActual:number) => {
        //console.log('acumulador -valor actual',`${acumulador}-${valorActual}`);
        
        return acumulador + valorActual;
    }

  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    // Trabajar aquí
    filter<any>( p => {
       let number = isNaN( p ) ? 0 : p;
       return number;
    } ),
    reduce( (acc, curr) => {
       return acc + curr;
    })
    //scan(totalAcumalador,0)

  ).subscribe( console.log ) // La salida debe de ser 32



})();

		