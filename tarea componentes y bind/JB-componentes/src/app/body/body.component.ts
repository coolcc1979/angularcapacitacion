import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  nombreCreador: String ;
  ciudad: String ;
  fecha: Date; 
  anios: Number; 
  experiencia: String;
  comentario: String;
  residencia: String;
  constructor() {
    this.nombreCreador ="Jessica Ballesteros "
    this.ciudad ="Riobamba"
    this.fecha = new Date()
    this.anios = 22
    this.experiencia = "4 años aprendiendo"
    this.residencia = "Riobamba"
    this.comentario = "Programa desarrollada en complementacion del proyecto de Angular"
  }

  ngOnInit(): void {
  }


}
