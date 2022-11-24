import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { FormsModule } from '@angular/forms';
import { AnimalDetalleComponent } from './animal-detalle/animal-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
