import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  title ="Series de Marvel"
  id ="";
  constructor(private marvelSvc: MarvelService) { }
  series?: Observable<any>;
  ngOnInit(): void {
    this.getAllSeries();
  }

  getAllSeries(){
    this.series = this.marvelSvc.getPeliculas();
  }


}
