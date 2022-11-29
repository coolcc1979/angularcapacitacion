import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipersonaje } from 'src/app/interfaces/ipersonaje';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-mi-creacion-personaje',
  templateUrl: './mi-creacion-personaje.component.html',
  styleUrls: ['./mi-creacion-personaje.component.scss'],
})
export class MiCreacionPersonajeComponent implements OnInit {
  @ViewChild('btnModalPersonaje', { static: true })
  btnModalPersonaje: ElementRef<HTMLButtonElement> = {} as ElementRef;

  @ViewChild('btnModalUpdatePersonaje', { static: true })
  btnModalUpdatePersonaje: ElementRef<HTMLButtonElement> = {} as ElementRef;

  personaje: Ipersonaje = {
    id: '',
    name: '',
    description: '',
    image: '',
    series: [],
    comics: [],
    type: 'Firebase',
  };

  personajeUpate: Ipersonaje = {
    id: '',
    name: '',
    description: '',
    image: '',
    series: [],
    comics: [],
    type: 'Firebase',
  };

  comicAux = {
    name: '',
  };
  serieAuxx = {
    name: '',
  };
  personajesList: Ipersonaje[] = [];
  email: string = '';
  constructor(private readonly marvelService: MarvelService) {}

  ngOnInit(): void {
    const emailAux = localStorage.getItem('user');
    if (emailAux) {
      this.email = emailAux;
    }
    //this.getPersonajesByQuery();
    this.getMyPersonajesFirebase()
  }

  async savePersonaje(forma: NgForm, type: string) {
    try {

      if(type === 'C'){
        this.personaje.creator = this.email;
        await this.marvelService.addPersonaje(this.personaje);
        this.btnModalPersonaje.nativeElement.click();
  
      }else {
        this.personajeUpate.creator = this.email;
        console.log('update', this.personajeUpate)
        await this.marvelService.addPersonaje(this.personajeUpate);
        this.btnModalUpdatePersonaje.nativeElement.click();
      }
      forma.reset();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  addComic(type: string) {
    const aux = { ...this.comicAux };

    if (this.comicAux.name.length > 0) {
      if (type === 'C') {
        this.personaje.comics = [...this.personaje.comics, aux];
      } else {
        this.personajeUpate.comics = [...this.personajeUpate.comics, aux];
      }
      this.comicAux.name = '';
    }
  }

  addSerie(type: string) {
    const aux = { ...this.serieAuxx };
    if (this.serieAuxx.name.length > 0) {
      if (type === 'C') {
        this.personaje.series = [...this.personaje.series, aux];
      } else {
        this.personajeUpate.series = [...this.personajeUpate.series, aux];
      }
      this.serieAuxx.name = '';
    }
  }

  deleteComic(index: number, type: string) {
    if(type === 'C'){
      this.personaje.comics.splice(index, 1);
    }else {
      this.personajeUpate.comics.splice(index, 1);
    }
  }

  deleteSerie(index: number, type: string) {
    if(type === 'C'){
      this.personaje.series.splice(index, 1);
    }else {
      this.personajeUpate.series.splice(index, 1);
    }
  }

  getMyPersonajesFirebase() {
    this.marvelService.getMyPersonajes().subscribe((data: any) => {
      console.log(data);

      data = data.filter((item: any)=> item.creator === this.email)

      this.personajesList = [...data];
    });
  }

  showUpdatePersonaje(personaje: Ipersonaje) {
    this.personajeUpate = { ...personaje };
    this.btnModalUpdatePersonaje.nativeElement.click();
  }

  deletePersonaje(personaje: Ipersonaje) {
    try {
      this.marvelService.deletePersonajeById(personaje);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  closeModal(forma: NgForm, type: string) {
    if (type === 'C') {
      this.btnModalPersonaje.nativeElement.click();
      this.personaje.comics = []
      this.personaje.series = []
      forma.reset();
    } else {
      this.btnModalUpdatePersonaje.nativeElement.click();
    }
  }

  async getPersonajesByQuery() {
    const resp = await this.marvelService.getMyPersonajeByQuery(this.email);
    if (resp.size > 0) {
      resp.forEach((doc) => {
        let dataAux = doc.data() as Ipersonaje;
        dataAux.id = doc.id;
        this.personajesList = [...this.personajesList, dataAux];
      });
    }
  }
}
