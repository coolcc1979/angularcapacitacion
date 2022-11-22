import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public nombre: string = "Gibrán Guzmán";
  public gitHub:string = "https://github.com/gibranjulyano11";
  
  constructor() { }

  ngOnInit(): void {
  }

}
