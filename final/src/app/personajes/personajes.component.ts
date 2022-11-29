import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  title = 'Personajes de Marvel';

  constructor(private marvelSvc: MarvelService, private router: Router) {}
  characters?: Observable<any>;
  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characters = this.marvelSvc.getCharacters();
  }

  getCharacter(id: string) {
    this.router.navigate(['/character/', id]);
  }
}
