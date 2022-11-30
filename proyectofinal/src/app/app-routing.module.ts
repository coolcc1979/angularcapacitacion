import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AuthComponent} from './auth/auth.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './register/register.component';
import { FavoriteHeroComponent } from './favorite-hero/favorite-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { InformacionHeroesComponent } from './informacion-heroes/informacion-heroes.component';
import { MoviesInformationComponent } from './movies-information/movies-information.component';
import { ComicComponent } from './comic/comic.component';
import { PerfilComponent } from './perfil/perfil.component';
const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path:'home' , component: HomeComponent,canActivate: [LoginGuard]},
  {path:'register' , component: RegisterComponent},
  {path:'favorite' , component: FavoriteHeroComponent,canActivate: [LoginGuard]},
  {path:'add-hero' , component: AddHeroComponent,canActivate: [LoginGuard]},
  {path:'informacion-heroes/:id' , component: InformacionHeroesComponent,canActivate: [LoginGuard]},
  {path:'movies-information/:id' , component: MoviesInformationComponent,canActivate: [LoginGuard]},
  {path:'comic/:id' , component: ComicComponent,canActivate: [LoginGuard]},
  {path:'perfil' , component: PerfilComponent,canActivate: [LoginGuard]},

  /*{path: 'user', redirectTo: '/auth', pathMatch: 'full'}*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
