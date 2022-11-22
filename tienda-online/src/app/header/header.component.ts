import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public imageUrl: string = "https://signoscomunicacion.com/wp-content/uploads/2015/05/tienda-online.png";
  public nombre:string = "Tienda Online de Gibrán";
  
  constructor() { }

  ngOnInit(): void {
  }

}
