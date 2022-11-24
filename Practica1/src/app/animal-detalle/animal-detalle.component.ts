import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/IAnimal';

@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.component.html',
  styleUrls: ['./animal-detalle.component.css']
})
export class AnimalDetalleComponent implements OnInit {
  comentarios: string;
  @Input()  arr2: IAnimal[];
  constructor() { 
    this.arr2= [
    ];
    this.comentarios ="";
  }

  ngOnInit(): void {}
  
  agregar(id: number): void {

    let comentario = this.comentarios;
    console.log(comentario);
    this.arr2[id].caracteristicas.push(comentario);
  }

}
