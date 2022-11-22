import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  propietario: String;
  imagenUrl: String;
  constructor() {
    this.propietario = "Jessica Ballesteros";
    this.imagenUrl = "https://www.adobe.com/es/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=2000&format=webply&optimize=medium";
   }

  ngOnInit(): void {
  }

}
