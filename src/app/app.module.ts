import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsincronaModule } from './asincrona/asincrona.module';
import { EnClaseModule } from './en-clase/en-clase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnClaseModule,
    AsincronaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
