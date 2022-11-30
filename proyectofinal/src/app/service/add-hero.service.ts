import { Injectable } from '@angular/core';
import { HeroServiceService } from './hero-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddHeroService extends HeroServiceService{
  HeroesnewList:Object[]
  constructor(){
    super();
    this.HeroesnewList=[]
  }
  addHero(hero:Object){
    
    this.HeroesnewList.push(hero)
  }
  getHeroesLista(){
    return this.HeroesnewList
  }
  resetList(){
    this.HeroesnewList=[]
  }
}
