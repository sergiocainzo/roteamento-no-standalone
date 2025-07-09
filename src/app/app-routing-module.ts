import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

const routes: Routes = [
  {path:'primeira-pagina', component:PrimeiraPagina},
  {path:'segunda-pagina', component:SegundaPagina},
  {path:'', redirectTo: 'primeira-pagina', pathMatch: 'full'},
  {path:'**',component:PaginaNaoEncontrada}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
