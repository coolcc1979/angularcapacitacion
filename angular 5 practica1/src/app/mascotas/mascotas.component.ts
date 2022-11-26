import { Component, Inject, OnInit } from '@angular/core';
import { Anadiranimales } from '../service/Anadiranimales';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})

export class MascotasComponent {
 caracteristicas:string[]= [];
 name:string=''
  constructor(public anadiranimales:Anadiranimales) {   
  }
   animales = this.anadiranimales.getAnimales();
   anadirCaracteristicas(index:number){
    this.animales[index].caracteristicas.push(this.name);
    this.caracteristicas.push(this.name);
    this.name='';
  }
  }
  



