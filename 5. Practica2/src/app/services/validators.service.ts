import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  validarUnNumero(password: string): boolean {
    if (password.match(/\d/) == null) {
      return false;
    }

    return true;
  }

  validarUnaLetra(password: string): boolean {
    const regex = /[A-Z]+/g;
    if (password.match(regex) == null) {
      return false;
    }
    return true;
  }

  passwordIguales(password1: string, password2: string): boolean {
    if (password1 === password2) {
        return true;
    }
    return false;
  }
}
