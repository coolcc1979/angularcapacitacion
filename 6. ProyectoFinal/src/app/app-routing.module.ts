import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MiCreacionPersonajeComponent } from './components/mi-creacion-personaje/mi-creacion-personaje.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PersonajeDetalleComponent } from './components/personaje-detalle/personaje-detalle.component';
import { LoginGuard } from './guards/login.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },

  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'home/personaje/:type/:id',
    component: PersonajeDetalleComponent,
    canActivate: [UserGuard]

  },

  {
    path: 'dashboard/mis-personajes',
    component: MiCreacionPersonajeComponent,
    canActivate: [UserGuard]

  },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
