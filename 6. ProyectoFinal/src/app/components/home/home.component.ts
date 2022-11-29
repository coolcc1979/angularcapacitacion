import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Ipersonaje } from 'src/app/interfaces/ipersonaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  personajes: Ipersonaje[] = [];
  myPersonajesList: Ipersonaje[] = [];
  email: string = '';

  constructor(private readonly marvelService: MarvelService) {}

  ngOnInit(): void {
    const emailAux = localStorage.getItem('user');
    if (emailAux) {
      this.email = emailAux;
    }
    this.getPersonajes();
    this.getPersonajesByQuery();
  }

  getPersonajes() {
    this.marvelService.getPersonajes().subscribe((data) => {
      this.personajes = data.map((personaje: any) => {
        return {
          id: personaje.id,
          name: personaje.name,
          description: personaje.description,
          image: personaje.thumbnail.path + '.' + personaje.thumbnail.extension,
        };
      });
    });
  }

  getMyPersonajesFirebase() {
    this.marvelService.getMyPersonajes().subscribe((data: any) => {
      this.myPersonajesList = [...data];
    });
  }

  async getPersonajesByQuery() {
    const resp = await this.marvelService.getMyPersonajeByQuery(this.email);
    if (resp.size > 0) {
      resp.forEach((doc) => {
        let dataAux = doc.data() as Ipersonaje;
        dataAux.id = doc.id;
        this.myPersonajesList = [...this.myPersonajesList, dataAux];
      });
    }
  }
}
