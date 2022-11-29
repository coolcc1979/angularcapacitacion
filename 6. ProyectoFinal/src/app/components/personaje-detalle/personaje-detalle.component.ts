import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipersonaje } from 'src/app/interfaces/ipersonaje';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss'],
})
export class PersonajeDetalleComponent implements OnInit {
  personaje: Ipersonaje = {
    id: '',
    name: '',
    description: '',
    image: '',
    comics: [],
    series: [],
  };

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      console.log(params);
      if (params.id) {
        if (params.type === 'Firebase') {
          this.getPersonajeFirebaseById(params.id);
        } else {
          this.getPersonajeMarvelById(params.id);
        }
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }

  getPersonajeMarvelById(id: string) {
    this.marvelService.getPersonajeById(id).subscribe((res: any) => {
      console.log('res', res);

      const personajeAux = {
        name: res[0].name,
        id: res[0].id,
        description: res[0].description,
        image: res[0].thumbnail.path + '.' + res[0].thumbnail.extension,
        comics: res[0].comics.items,
        series: res[0].series.items,
      };

      this.personaje = { ...personajeAux };
      console.log(this.personaje);
    });
  }

  async getPersonajeFirebaseById(id: string) {
    try {
      const res: any = await this.marvelService.getMyPersonajeById(id);
      this.personaje = { ...res.data() };
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
