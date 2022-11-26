import { Component, OnInit } from '@angular/core';
import { Anadiranimales } from '../service/Anadiranimales';
interface animal{
id:number;
especie:string;
raza:string;
color:string

}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  animal:animal={
    id:0,
    especie:'',
    raza:'',
    color:'',
  };
  constructor(public anadiranimales:Anadiranimales) {

   }
  

  ngOnInit(): void {
  
  }
  verFormulario(){
    if(this.animal.especie==''||this.animal.raza==''||this.animal.color==''){
      alert('Rellena todos los campos');
    }else{
    console.log(this.animal);
    this.anadiranimales.anadirAnimales({...this.animal,caracteristicas:[]});
    this.animal={
      id:0,
      especie:'',
      raza:'',
      color:'',
    };
  }
  }
}
