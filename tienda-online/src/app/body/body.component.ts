import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public nombre: string = 'Gibrán Guzmán ';
  public producto: string = 'Gomitas';
  public precio: string = "2.00";
  public comentarios: string = '';
  public textplaceholder : string = "";
  public deshabilitado : boolean = true;
  
  constructor() {
    setInterval(() => (this.deshabilitado = false), 5000);
  }

  // cliente1():void{
  //   this.nombre = "Julito Alimaña";
  //  this.producto = 'Gomitas';
  //  this.precio = "2.00";
  //  this.comentarios = '';
  //  this.deshabilitado = true;
  //  setInterval(() => (this.deshabilitado = false), 5000);
  // }

  // cliente2():void{
  //   this.nombre = "Romario Ibarra";
  //  this.producto = 'Chocolates';
  //  this.precio = "3.00";
  //  this.comentarios = '';
  //  this.deshabilitado = true;
  //  setInterval(() => (this.deshabilitado = false), 5000);
  // }

  ngOnInit(): void {}
}

