import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroServiceService } from '../service/hero-service.service';
import { ComicService } from '../service/comic.service';
import { SeriesService } from '../service/series.service';
@Component({
  selector: 'app-informacion-heroes',
  templateUrl: './informacion-heroes.component.html',
  styleUrls: ['./informacion-heroes.component.scss'],
})
export class InformacionHeroesComponent implements OnInit {
  id: string;
  heroList: any;
  constructor(
    private route: ActivatedRoute,
    public hero: HeroServiceService,
    public comic: ComicService,
    public series: SeriesService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.hero.getHeroesId(this.id).then((res) => {
      this.heroList = res.data.data.results;
      console.log(this.heroList);
    });
  }
  goComic(url: string) {
    const urlnew = url.split('/');
    const id = urlnew[urlnew.length - 1];
    this.router.navigate(['/comic', id]);
  
  }
  goMovies(url: string){
    const urlnew=url.split('/')
    const id=urlnew[urlnew.length-1]
  this.router.navigate(['/movies-information',id])
  }
}
