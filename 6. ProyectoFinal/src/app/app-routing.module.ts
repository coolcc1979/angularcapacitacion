import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MiCreacionPersonajeComponent } from './components/mi-creacion-personaje/mi-creacion-personaje.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PersonajeDetalleComponent } from './components/personaje-detalle/personaje-detalle.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'home/personaje/:type/:id',
    component: PersonajeDetalleComponent,
  },

  {
    path: 'dashboard/mis-personajes',
    component: MiCreacionPersonajeComponent,
  },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
