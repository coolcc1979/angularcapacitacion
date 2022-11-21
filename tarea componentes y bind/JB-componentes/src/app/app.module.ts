import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, SlidebarComponent, BodyComponent],
  imports: [BrowserModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
