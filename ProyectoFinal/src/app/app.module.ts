import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NewHeroeComponent } from './new-heroe/new-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    UserPerfilComponent,
    HeaderComponent,
    EditPerfilComponent,
    HeroesListComponent,
    NewHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
