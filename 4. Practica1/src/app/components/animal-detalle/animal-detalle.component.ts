import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Ianimal } from 'src/app/interfaces/ianimal';

@Component({
  selector: 'app-animal-detalle',
  templateUrl: './animal-detalle.component.html',
  styleUrls: ['./animal-detalle.component.scss'],
})
export class AnimalDetalleComponent implements OnInit, AfterViewInit {
  @Input() animales: Ianimal[] = [];

  constructor() {}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}

  addCaracteristicas(event: string[], index: number): void {

    this.animales[index].caracteristicas = event

    console.log(this.animales)

  } 
}
