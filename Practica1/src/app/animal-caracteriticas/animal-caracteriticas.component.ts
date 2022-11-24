import { Component, OnInit } from '@angular/core';
import { ValidacionService } from '../services/validacion.service';

@Component({
  selector: 'app-animal-caracteriticas',
  templateUrl: './animal-caracteriticas.component.html',
  styleUrls: ['./animal-caracteriticas.component.css']
})
export class AnimalCaracteriticasComponent implements OnInit {

  caracteristicas: string[] = [];

  caracteristica: string = "";

  constructor(private validador: ValidacionService) { }

  ngOnInit(): void {
  }

  guardarCaracteristica(){
    if(this.validador.vacioCar(this.caracteristica)){
      this.caracteristicas.push(this.caracteristica);
      this.caracteristica = "";
    }else{
      alert("No caracteristica vacia");
    }
    
  }
}
