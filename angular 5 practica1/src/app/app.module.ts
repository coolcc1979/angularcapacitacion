import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { FormsModule } from '@angular/forms';
import { Anadiranimales } from './service/Anadiranimales';
import { CaracteristicasPipe } from './caracteristicas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MascotasComponent,
    CaracteristicasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Anadiranimales],
  bootstrap: [AppComponent]
})
export class AppModule { }
