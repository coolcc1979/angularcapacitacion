import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  keys: string = "limit=15&ts=1&apikey=195a597732865ae8cd98838fb5b62d60&hash=a26889914ec8fb84efe56d2f8cd44cd9";
  
  constructor(
    private http: HttpClient
  ) { }

  getHeroesList(offset: number){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?offset='+offset+'&'+this.keys)
    .pipe(
      map((response: any) => {
        let heroes = response.data.results;
        return heroes.map((x: any) => {
          return {
            id: x.id,
            info: x.description,
            nombre: x.name,
            imagen: x.thumbnail.path+'.'+x.thumbnail.extension,
            comics: x.comics,
            series: x.series,
            stories: x.stories
          }
        })
      })
    );
  }

  getHeroesByName(name: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?name='+name+'&'+this.keys)
    .pipe(
      map((response: any) => {
        let heroes = response.data.results;
        return heroes.map((x: any) => {
          return {
            id: x.id,
            nombre: x.name,
            imagen: x.thumbnail.path+'.'+x.thumbnail.extension,
            comics: x.comics,
            series: x.series,
            stories: x.stories
          }
        })
      })
    );
  }

  getOrderBy(order: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy='+order+'&'+this.keys)
    .pipe(
      map((response: any) => {
        let heroes = response.data.results;
        return heroes.map((x: any) => {
          return {
            id: x.id,
            nombre: x.name,
            imagen: x.thumbnail.path+'.'+x.thumbnail.extension,
            comics: x.comics,
            series: x.series,
            stories: x.stories
          }
        })
      })
    );
  }

  getPagination(offset: number, order: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?offset='+offset+'&orderBy='+order+'&'+this.keys)
    .pipe(
      map((response: any) => {
        let heroes = response.data.results;
        return heroes.map((x: any) => {
          return {
            id: x.id,
            nombre: x.name,
            imagen: x.thumbnail.path+'.'+x.thumbnail.extension,
            comics: x.comics,
            series: x.series,
            stories: x.stories
          }
        })
      })
    );
  }
}
