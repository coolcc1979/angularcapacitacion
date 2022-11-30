import { Injectable } from '@angular/core';
import { HeroServiceService } from './hero-service.service';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ComicService extends HeroServiceService {

  constructor() {
    super();
  }
  getUrlComic():string{
    return this.path+"comics?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()+"&limit=100"
  }
  getUrlComicById(id:string): string {
    return this.path+"comics/"+id+"?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()
  }
  async getComics(): Promise<any> {
    return await axios.get(this.getUrlComic())
   }
  async getComicsurl(url:string): Promise<any> {
    return await axios.get(url)
    }
  async getComicsId(id:string): Promise<any> {
    return await axios.get(this.getUrlComicById(id))
    }
}
