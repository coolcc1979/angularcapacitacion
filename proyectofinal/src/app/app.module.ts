import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/Authservice';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FavoriteHeroComponent } from './favorite-hero/favorite-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { InformacionHeroesComponent } from './informacion-heroes/informacion-heroes.component';
import { MoviesInformationComponent } from './movies-information/movies-information.component';
import { ComicComponent } from './comic/comic.component';
import { PerfilComponent } from './perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    FavoriteHeroComponent,
    AddHeroComponent,
    InformacionHeroesComponent,
    MoviesInformationComponent,
    ComicComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
