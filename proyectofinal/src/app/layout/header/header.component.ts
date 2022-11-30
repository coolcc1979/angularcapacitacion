import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/service/Authservice';
import { PerfilServiceService } from 'src/app/service/perfil-service.service';
import { AddHeroService } from 'src/app/service/add-hero.service';
import { HeroServiceService } from 'src/app/service/hero-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  carritoCompras = faShoppingCart;
  nombre: string;
  email: string;

  public perfilData: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private perfil: PerfilServiceService,
    private addHero: AddHeroService,
    private heroService: HeroServiceService
  ) {
    this.perfilData = {};
  }
  ngOnInit() {
    this.perfil.getPerfil().then((res) => {
      this.perfilData = res.data();
      console.log(this.perfilData);
      this.nombre = this.perfilData.nombre;
    });
    console.log(this.perfilData);
  }
  GoFavorite(){
    this.router.navigate(['favorite'])
  }
  GoHome() {
    this.router.navigate(['home']);
  }
  logout() {
    this.heroService.resetmarvelheroes()
    this.auth
      .logout()
      .then((res) => {
        window.localStorage.removeItem('token');
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
