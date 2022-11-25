import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrateComponent } from './registrate/registrate.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'registro', component: RegistrateComponent },
  { path: 'login', component: LoginComponent } ,
  { path: 'dashboard', component: DashboardComponent  } ,
  { path: '', redirectTo: '/registro', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
