import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalDetalleComponent } from './animal-detalle/animal-detalle.component';
import { AnimalCaracteriticasComponent } from './animal-caracteriticas/animal-caracteriticas.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalDetalleComponent,
    AnimalCaracteriticasComponent,
    MayusculasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
