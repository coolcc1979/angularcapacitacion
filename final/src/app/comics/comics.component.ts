import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  title='Comics';
  constructor(private marvelSvc:MarvelService, private router:Router) { 

  }
  comics?:Observable<any>;

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics(){

    this.comics= this.marvelSvc.getComics();

  }

  getComics(id:string){

    this.router.navigate(['/comic/',id]);

  }

}
