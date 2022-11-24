import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var retorno = "";
    for(let x=0 ; x<value.length ; x++ ){
      if(x%2==0){
        retorno+=value[x].toUpperCase();
      }else{
        retorno+=value[x].toLowerCase();
      }
    }
    return retorno;
  }

}
