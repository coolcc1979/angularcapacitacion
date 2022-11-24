import { Component, OnInit , Input} from '@angular/core';
import { Animal } from '../../app/animal'
@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.component.html',
  styleUrls: ['./animal-detalle.component.css']
})
export class AnimalDetalleComponent implements OnInit {
  comentario: string;
  @Input()  arr2: Animal[];
  constructor() { 
    this.arr2= [
    ];
    this.comentario ="";
  }

  ngOnInit(): void {
  }
  
  agregar(id: number): void {

    let comentario = this.comentario;
    console.log(comentario);
    this.arr2[id].caracteristicas.push(comentario);
  }

}

