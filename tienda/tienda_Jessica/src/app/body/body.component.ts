import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  nombre: String;
  producto: String;
  precio: String;
  deshabilitado:  boolean = true;
  textplaceholder: String;
  comentario: String;
  nombres: String[];
  constructor() { 
    this.nombre = "";
    this.producto = "";
    this.precio = "";
    this.textplaceholder ="";
    this.comentario ="";
    this.nombres = ["Jessica Ballesteros","Jose Manolo", "Jose Alfonso"];
  }

  ngOnInit(): void {
    
  }

  public user(){
    this.deshabilitado =true;
    this.producto = "Sabana";
    this.precio = "2$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[0];
  }
 public  user1(){
  this.deshabilitado =true;
    this.producto = "Sofa";
    this.precio = "200$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[1];
  }
  public user2(){
    this.deshabilitado =true;
    this.producto = "Manta";
    this.precio = "3$";
    setInterval(()=>this.deshabilitado = false, 5000);
    this.nombre = this.nombres[2];
  }
}
