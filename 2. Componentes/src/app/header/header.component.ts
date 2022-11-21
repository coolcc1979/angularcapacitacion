import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagen: string = "https://t3.ftcdn.net/jpg/03/86/45/96/360_F_386459614_7JRoaj5LBSbum74i1LXf3oaoMnxQwJdu.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
