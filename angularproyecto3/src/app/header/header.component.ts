import { Component, OnInit } from '@angular/core';

interface data {
  link: string[];
  image: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  datas: data = {
    link: ['Home', 'About', 'Contact'],
    image: '../../assets/imagen/goldenview.jfif',
  };
  constructor() {}

  ngOnInit(): void {}
}
