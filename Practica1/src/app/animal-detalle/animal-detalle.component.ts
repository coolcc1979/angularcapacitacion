import { Component, OnInit , Input} from '@angular/core';
import { Animal } from '../../app/animal'
@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.component.html',
  styleUrls: ['./animal-detalle.component.css']
})
export class AnimalDetalleComponent implements OnInit {
  comentario: string;
  @Input()  arrAnimales: Animal[];
  constructor() { 
    this.arrAnimales= [
    ];
    this.comentario ="";
  }

  ngOnInit(): void {
  }
  
  agregar(id: number): void {

    let comentario = this.comentario;
    console.log(comentario);
    this.arrAnimales[id].caracteristicas.push(comentario);
  }

}

