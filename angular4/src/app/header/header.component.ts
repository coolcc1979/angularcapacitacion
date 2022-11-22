import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   nombre = 'Tienda Online GamePisco';
   urlLogo='../../assets/imagen/videogame1.png';
  constructor() { }

  ngOnInit(): void {
  }

}
