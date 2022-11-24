import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noApellidoCorrea(control:FormControl): ErrorValidate | null {
    if (control.value.toUpperCase() === 'CORREA') {
      return {
        noApellidoCorrea:true
      }
    }
    return null;
  }  

  existeUsuario(control:FormControl):Promise<ErrorValidate | null> | Observable<ErrorValidate | null>{
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'jpch@jpch.com') {
          resolve({existe :true});
        } else {
          resolve(null);
        }  
      },5000);
    });
  }

  passwordIguales(password1: string, password2: string) {
    return (formGroup:FormGroup) => {
      const password1Control = formGroup.controls[password1];
      const password2Control = formGroup.controls[password2];

      if (password1Control.value === password2Control.value) {
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({noEsIgual:true});
      }
    }
  }

  
}



//Interface para respuesta de validación
interface ErrorValidate {
  [s:string]: boolean;
}