import { Injectable } from '@angular/core';
import {Md5} from 'md5-typescript';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  public Heroes: Object[];
  public clavepublica: string;
  public claveprivada: string;
  public addMarvelHero:Object[]
  public ListadeHeroes: any 
  time: number;
  path:string
  constructor() {
    this.clavepublica = "8c95d6efe1a3f26268f8876367673a99";
    this.claveprivada = "f4ed6d8f57c8228576bcbd190637e3fb6bd1fcc3";
    this.time = 9;
    this.path="https://gateway.marvel.com:443/v1/public/"
    this.addMarvelHero=[]
    this.ListadeHeroes=[]
  }
  gethash(): string {
    return Md5.init(this.time + this.claveprivada + this.clavepublica)
  }
  getUrl(): string {
    return this.path+"characters?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()+"&limit=100"+"&nameStartsWith=s"
  }
  getUrlById(id:string): string {
    return this.path+"characters/"+id+"?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()
  }
  async getHeroesId(id:string): Promise<any> {
    return await axios.get(this.getUrlById(id))
    };
  async getHeroes(): Promise<any> {
    return await axios.get(this.getUrl())
    };
  savehero(hero:Object){
    this.addMarvelHero.push(hero)
  }
  getheros():Object[]{
    return this.addMarvelHero
  }
  resetmarvelheroes(){
    this.ListadeHeroes=[]
    this.addMarvelHero=[]
  }
  setListadeHeroes(heroes:Object[]){
    this.ListadeHeroes=heroes
  }
  getListadeHeroes():Object[]{
    return this.ListadeHeroes
  }
  filterHeroes(name:string):Object[]{
    return this.ListadeHeroes.filter((hero:any)=>{
      return hero.name.toLowerCase().includes(name.toLowerCase())
    })
  }
  changeListadeHeores(name:string){
    console.log(this.filterHeroes(name))
    this.ListadeHeroes=this.filterHeroes(name)
  }
}