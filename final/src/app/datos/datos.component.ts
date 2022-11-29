import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { Actor } from '../models/modeloActor';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  actor: Actor;
  comics: string[];
  peliculas: string[];
  comic: string;
  pelicula: string;
  constructor() { 
    this.actor ={
      id: 0, nombre:"", genero:"", peliculas:[], comics: [], imagen:""
    }
    this.comics = [],
    this.peliculas =[],
    this.comic ="",
    this.pelicula = ""
  }

  ngOnInit(): void {
  }

  agregar(){
    let actr: Actor;
    actr ={
      id: this.actor.id, nombre: this.actor.nombre,genero: this.actor.genero ,peliculas: this.peliculas, comics: this.comics,imagen: this.actor.imagen
    
    }
    this.actor = actr
    console.log(this.actor)
    Swal.fire("Datos guardados correctamente")
 
  }

  agregarPeli(){
    let peli = this.pelicula;
    this.peliculas.push(peli);
  }

  agregarComic(){
    let comic = this.comic
    this.comics.push(comic);
  }

}
