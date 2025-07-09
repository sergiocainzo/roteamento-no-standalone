import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { CommonModule } from '@angular/common';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';

@NgModule({
  declarations: [
    App,
    PrimeiraPagina,
    SegundaPagina,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
