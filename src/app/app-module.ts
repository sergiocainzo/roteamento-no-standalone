import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { CommonModule } from '@angular/common';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { PaginaComParametros } from './pagina-com-parametros/pagina-com-parametros';
import { PaginaProtegida } from './pagina-protegida/pagina-protegida';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    PrimeiraPagina,
    SegundaPagina,
    PaginaNaoEncontrada,
    PaginaComParametros,
    PaginaProtegida,
    Login,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
