import { Injectable } from '@angular/core';
interface animal {
  id: number;
  especie: string;
  raza: string;
  color: string;
  caracteristicas: string[];
}
@Injectable()
export class Anadiranimales {
  animales: animal[];
  constructor() {
    this.animales = [];
  }
  anadirAnimales(animal: animal) {
    this.animales.push(animal);
  }
  getAnimales(): animal[] {
    return this.animales;
  }
}
