import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NewHeroeComponent } from './new-heroe/new-heroe.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'perfil', component: UserPerfilComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'newheroe', component: NewHeroeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'heroes', component: HeroesListComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'edit', component: EditPerfilComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
