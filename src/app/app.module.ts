
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';   
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './Ventas/ventas.module';

//Cambiar el idioma
import locales from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locales);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ], 
  providers: [
   { provide : LOCALE_ID, useValue : 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
