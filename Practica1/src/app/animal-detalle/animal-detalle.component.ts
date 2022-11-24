import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from '../interfaces/ianimal';

@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.component.html',
  styleUrls: ['./animal-detalle.component.css']
})
export class AnimalDetalleComponent implements OnInit {

  @Input() animales: IAnimal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
