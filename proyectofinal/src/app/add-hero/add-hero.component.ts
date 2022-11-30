import { Component, OnInit } from '@angular/core';
import { AddHeroService } from '../service/add-hero.service';
interface Hero {
  id: number;
  image: string;
  name: string;
  description: string;
  peliculas: string[];
  comics: string[];
}
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
})
export class AddHeroComponent implements OnInit {
  pelicula: string;
  comic: string;
  heroe: Hero = {
    id: 1,
    image: '',
    name: '',
    description: '',
    peliculas: [],
    comics: [],
  };
  constructor(private addPeliculas: AddHeroService) {
    this.pelicula='';
    this.comic='';
  }

  ngOnInit(): void {}
  addPelicula() {
    if(this.pelicula==''){
      alert('No se puede agregar una pelicula vacia')
    }else{
    this.heroe.peliculas.push(this.pelicula);
    this.pelicula = '';
    }
  }
  addComic() {
    if(this.comic==''){
      alert('No se puede agregar un comic vacio')
    }else{
      this.heroe.comics.push(this.comic);
      this.comic = '';
    }
 
  }
  addHero() {
    if (
      this.heroe.name == '' ||
      this.heroe.image == '' ||
      this.heroe.description == '' ||
      this.heroe.peliculas.length == 0 ||
      this.heroe.comics.length == 0
    ) {
      alert('Debe llenar todos los campos');
    } else {
      this.addPeliculas.addHero(this.heroe);
      console.log(this.heroe);
      alert('anadido correctamente');
      console.log(this.addPeliculas.getHeroesLista());
      this.heroe = {
        id: 1,
        image: '',
        name: '',
        description: '',
        peliculas: [],
        comics: [],
      };
    }
  }
}
