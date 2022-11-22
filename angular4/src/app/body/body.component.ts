import { Component, OnInit } from '@angular/core';
interface game{
  id:number;
  name:string;
  producto:string;
  precio:number;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  id="";
  product="";
  price="";
    productosGame:game[]= [
      { id:1,name: 'Luis Alfonso', producto: 'Mario Kart', precio: 200 },
      { id:2,name: 'Maria Castro', producto: 'MarioBart', precio: 100 },
      { id:3,name: 'Juan Perez', producto: 'MarioLink', precio: 500 },
    ]
  
  constructor() {}

  ngOnInit(): void {}
  ChangeProduct(e:Event){
    this.id=(<HTMLInputElement>e.target).value;
    this.productosGame.find((element)=>{
      if(element.id==Number(this.id)){
        this.product=element.producto;
        this.price=element.precio.toString();
      }
    })
}
}
