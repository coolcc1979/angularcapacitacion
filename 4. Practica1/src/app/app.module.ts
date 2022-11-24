import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalDetalleComponent } from './components/animal-detalle/animal-detalle.component';
import { AnimalCaractetisticaComponent } from './components/animal-caracteristica/animal-caracteristica.component';

@NgModule({
  declarations: [AppComponent, AnimalComponent, AnimalDetalleComponent, AnimalCaractetisticaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
