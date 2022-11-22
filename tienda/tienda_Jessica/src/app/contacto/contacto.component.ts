import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  direccion: String;
  telefono: String;

  constructor() { 
    this.direccion = "Juan23 ";
    this.telefono = "0996731022";
  }

  ngOnInit(): void {
  }

}
