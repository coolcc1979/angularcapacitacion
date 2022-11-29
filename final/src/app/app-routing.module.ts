import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrateComponent } from './registrate/registrate.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicComponent } from './comic/comic.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  { path: 'registro', component: RegistrateComponent },
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent  } ,
  { path: 'personajes', component: PersonajesComponent  } ,
  { path:'comics', component:ComicsComponent},
  { path:'series', component:SeriesComponent},
  { path:'datos', component:DatosComponent},
  { path:'comic/:id', component:ComicComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
