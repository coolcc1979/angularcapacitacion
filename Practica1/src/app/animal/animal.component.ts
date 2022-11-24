import { animate } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { Animal } from '../../app/animal'
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent implements OnInit {
  anim: Animal;
  arr: Animal[];
  constructor() { 
    this.anim ={
      id: 0, especie:"", raza:"", color:"", caracteristicas: []
    }

     this.arr= [
    ];
    };


  ngOnInit(): void {
    
  }

  agregar(){
    let anim2: Animal;
    anim2 ={
      id: this.anim.id, especie:this.anim.especie, raza:this.anim.raza, color:this.anim.color, caracteristicas:[]
    }

    this.arr.push(anim2);
  }
}



