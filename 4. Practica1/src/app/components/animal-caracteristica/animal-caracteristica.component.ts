import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-animal-caractetistica',
  templateUrl: './animal-caracteristica.component.html',
  styleUrls: ['./animal-caracteristica.component.scss']
})
export class AnimalCaractetisticaComponent implements OnInit {

  caracteristica: string = '';
  listCaracteristicas: string[] = [];
  @Output() listaEmit = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  addCaracteristica(forma: NgForm){
    this.listCaracteristicas = [...this.listCaracteristicas, this.caracteristica];
    this.listaEmit.emit(this.listCaracteristicas);
    forma.reset();

  }

}
