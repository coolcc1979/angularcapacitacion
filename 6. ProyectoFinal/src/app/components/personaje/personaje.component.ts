import { Component, OnInit, Input } from '@angular/core';
import { Ipersonaje } from 'src/app/interfaces/ipersonaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {
  @Input() personaje: Ipersonaje = {
    id: '',
    name: '',
    description: '',
    image: '',
    series: [],
    comics: [],
    type: 'Firebase' || 'Marvel',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verMasPersonaje() {
    const rutaType = this.personaje.type ? 'Firebase' : 'Marvel';
    this.router.navigateByUrl(
      `/home/personaje/${rutaType}/${this.personaje.id}`
    );
  }
}
