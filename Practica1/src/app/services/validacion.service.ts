import { Injectable } from '@angular/core';
import { IAnimal } from '../interfaces/ianimal';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  vacio(animal: IAnimal): boolean{
    if(animal.id === "")
      return false;
    if(animal.especie === "")
      return false;
    if(animal.color === "")
      return false;
    if(animal.raza === "")
      return false;
    return true;
  }

  vacioCar(cadena: string): boolean{
    if(cadena === "")
      return false;
    return true;
  }
}
