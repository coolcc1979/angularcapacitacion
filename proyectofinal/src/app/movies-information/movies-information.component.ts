import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-movies-information',
  templateUrl: './movies-information.component.html',
  styleUrls: ['./movies-information.component.scss']
})
export class MoviesInformationComponent implements OnInit {
id:string
serieList:any
  constructor(public parametro:ActivatedRoute, public serie:SeriesService) { 
    this.id=parametro.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {    
    this.serie.getSeriesId(this.id).then((res)=>{
      this.serieList=res.data.data.results
      console.log(this.serieList)
    })
  }

}
