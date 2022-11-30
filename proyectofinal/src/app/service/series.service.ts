import { Injectable } from '@angular/core';
import { HeroServiceService } from './hero-service.service';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SeriesService extends HeroServiceService {

  constructor() {
    super();
  }
  getUrlSeries():string{
    return this.path+"series?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()+"&limit=100"
  }
  getUrlSeriesById(id:string): string {
    return this.path+"series/"+id+"?ts=" + this.time + "&apikey=" + this.clavepublica + "&hash=" + this.gethash()
  }
  async getSeries(): Promise<any> {
    return await axios.get(this.getUrlSeries())
   }
  async getSeriesurl(url:string): Promise<any> {
    return await axios.get(url)
    }
  async getSeriesId(id:string): Promise<any>{
    return await axios.get(this.getUrlSeriesById(id))
  }

  }



