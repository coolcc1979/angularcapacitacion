import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  imagenUrl:  String;
  constructor() {
    this.imagenUrl ="https://www.esimagenes.com/pimagen/among-us-personaje-png.png"
   }

  ngOnInit(): void {
    
  }

}
