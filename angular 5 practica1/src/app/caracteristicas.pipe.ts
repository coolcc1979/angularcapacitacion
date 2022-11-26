import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caracteristicas'
})
export class CaracteristicasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var caracteristicas = '';
    for(let i=0;i<value.length;i++){
      if(i%2==0){
        caracteristicas+=value[i].toUpperCase();
      }
      else{
        caracteristicas+=value[i].toLowerCase();
      }
    }
  return caracteristicas;
  }
  

}
