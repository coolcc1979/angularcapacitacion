import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imagen: string = "https://365psd.com/images/previews/3b6/small-store-icon-psd-53185.jpg";
  nombre: string = "Jonathan";

  constructor() { }

  ngOnInit(): void {
  }

}
