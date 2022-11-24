import { Component, OnInit } from '@angular/core';
import { Ianimal } from 'src/app/interfaces/ianimal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animal: Ianimal = {
    id: 1,
    especie: '',
    raza: '',
    color: '',
    caracteristicas: [],
  };

  animales: Ianimal[] = [];

  constructor() {}

  ngOnInit(): void {}

  createAnimal(formAnimal: NgForm): void {
    console.log(formAnimal.value)
    this.animales = [...this.animales, formAnimal.value];
    formAnimal.reset({});
  }
}
