import { Component, OnInit } from '@angular/core';
import{HeroServiceService} from '../service/hero-service.service';
@Component({
  selector: 'app-favorite-hero',
  templateUrl: './favorite-hero.component.html',
  styleUrls: ['./favorite-hero.component.scss']
})
export class FavoriteHeroComponent implements OnInit {
public HeroList:any
  constructor(public hero:HeroServiceService) { }
  ngOnInit(): void {
  this.HeroList=this.hero.getheros()
  }

}
