import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/IAnimal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  animal: IAnimal;
  arr: IAnimal[];
  constructor() {
    this.animal = {
      id: 0,
      especie: '',
      raza: '',
      color: '',
      caracteristicas: [],
    };

    this.arr = [];
  }

  ngOnInit(): void {}

  agregar() {
    let animales: IAnimal;
    animales = {
      id: this.animal.id,
      especie: this.animal.especie,
      raza: this.animal.raza,
      color: this.animal.color,
      caracteristicas: [],
    };

    this.arr.push(animales);
  }
}
