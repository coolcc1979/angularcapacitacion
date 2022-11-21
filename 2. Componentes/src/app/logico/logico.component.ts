import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-logico',
  templateUrl: './logico.component.html',
  styleUrls: ['./logico.component.css']
})
export class LogicoComponent implements OnInit {

  nombreCreador: string = "Jonathan Vargas";
  ciudad: string = "Quito";
  fecha: Date = new Date();
  edad: string = "26";
  comentario: string = "";


  constructor() { }

  ngOnInit(): void {
  }


  

}
