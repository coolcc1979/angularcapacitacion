import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from '../interfaces/ianimal';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  
  prefix: string = "ANI-";

  contador: number = 1;

  animales: IAnimal[] = [];

  animalito: IAnimal;

  constructor(private validador: ValidacionService) { 
    this.animalito = {
      id: this.prefix + this.contador.toString(),
      especie: "",
      raza: "",
      color: "",
      caracteristicas: []
    }
  }

  ngOnInit(): void {
  }

  guardarAnimal(){
    if(this.validador.vacio(this.animalito)){
      this.animales.push(this.animalito);
      this.contador += 1;
      this.animalito = {
        id: this.prefix + this.contador.toString(),
        especie: "",
        raza: "",
        color: "",
        caracteristicas: []
      }
    }else{
      alert("No campos vacios");
    }
  }
}
