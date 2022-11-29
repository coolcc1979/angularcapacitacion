import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { Heroe } from '../classes/Heroe';

@Component({
  selector: 'app-new-heroe',
  templateUrl: './new-heroe.component.html',
  styleUrls: ['./new-heroe.component.css']
})
export class NewHeroeComponent implements OnInit {

  heroe: Heroe = new Heroe();

  comic: string = "";
  serie: string = "";
  story: string = "";

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addComic(){
    this.heroe.comics.push(this.comic);
    this.comic = "";
  }

  addSerie(){
    this.heroe.series.push(this.serie);
    this.serie = "";
  }

  addStory(){
    this.heroe.stories.push(this.story);
    this.story = "";
  }

  saveHeroe(){
    this.databaseService.saveHeroe(this.heroe);
    this.router.navigate(['/heroes']);
  }

}
