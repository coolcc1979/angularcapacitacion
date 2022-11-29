import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { DatabaseService } from '../services/database.service';
import { Heroe } from '../classes/Heroe';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: any[] = [];

  heroesDb: any[] = [];

  valueSearch: string = "";

  orderBy: string = "";

  offset: number = 0;

  constructor(
    private heroesService: HeroesService,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.generalList();
    this.listFromDatabase();
  }

  listFromDatabase(){
    this.databaseService.getHeroes().subscribe(response => {
      this.heroesDb = response.map( x => {
        return x.payload.doc.data() as Heroe
      });
    })
  }

  generalList(){
    this.heroesService.getHeroesList(this.offset).subscribe(response =>{
      this.heroes = response;
    });
  }

  searchName(){
    this.heroesService.getHeroesByName(this.valueSearch).subscribe(response =>{
      this.heroes = response;
    });
  }

  filterOrder(){
    if(this.orderBy == 'asc'){
      this.heroesService.getOrderBy("name").subscribe(response =>{
        this.heroes = response;
      });
    }else if(this.orderBy == 'desc'){
      this.heroesService.getOrderBy("-name").subscribe(response =>{
        this.heroes = response;
      });
    }
  }

  change(size:number){
    this.offset = size;
    if(this.orderBy == ''){
      this.heroesService.getHeroesList(this.offset).subscribe(response =>{
        this.heroes = response;
      });
    }else if(this.orderBy == 'asc'){
      this.heroesService.getPagination(this.offset,"name").subscribe(response =>{
        this.heroes = response;
      });
    }else if(this.orderBy == 'desc'){
      this.heroesService.getPagination(this.offset,"-name").subscribe(response =>{
        this.heroes = response;
      });
    }
  }

  next(){
    if(this.offset < 90){
      this.offset += 15;
      this.change(this.offset);
    }
  }

  preview(){
    if(this.offset > 0){
      this.offset -= 15;
      this.change(this.offset);
    }
  }
}
