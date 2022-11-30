import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/Authservice';
import { HeroServiceService } from '../service/hero-service.service';
import { AddHeroService } from '../service/add-hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public result:any;
  public listinit:any
  constructor(
    private auth: AuthService,
    private router: Router,
    private hero: HeroServiceService,
    private addHero: AddHeroService

  ) {}
  ngOnInit():void {
    console.log(this.auth.getAuth());
    console.log(this.hero.gethash());
    this.listinit=this.addHero.getHeroesLista()
    if(this.hero.getListadeHeroes().length==0){
    this.hero.getHeroes().then((res) => {
      this.result = res.data.data.results.map((element) => ({...element,isSave:true}));
      this.hero.setListadeHeroes(this.result);
    });
  }
  else{
    this.result=this.hero.getListadeHeroes()
  }
  }
  guardar(i: number,index:number): void {
    console.log(this.result);
    console.log(index)
    const datas: Object = this.result.find((element) => element.id == i);
    this.hero.savehero(datas);
    const indice:number=this.result.findIndex((element)=>element.id===i)
    this.result[indice].isSave=!this.result[indice].isSave
    console.log(this.hero.getheros());
  }
  filter(e:Event){
    const d:string=e.target['value']
    if(d.length>0){
      this.result=this.result.filter((element)=>element.name.toLowerCase().includes(d.toLowerCase()))
    }
    else{
      this.result=this.hero.getListadeHeroes()
    }
  }
}
