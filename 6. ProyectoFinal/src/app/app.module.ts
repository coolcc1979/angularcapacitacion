import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajeDetalleComponent } from './components/personaje-detalle/personaje-detalle.component';
import { MiCreacionPersonajeComponent } from './components/mi-creacion-personaje/mi-creacion-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PerfilComponent,
    PersonajeComponent,
    PersonajeDetalleComponent,
    MiCreacionPersonajeComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
