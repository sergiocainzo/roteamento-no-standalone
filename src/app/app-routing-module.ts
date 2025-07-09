import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';

const routes: Routes = [
  {path:'primeira-pagina', component:PrimeiraPagina},
  {path:'segunda-pagina', component:SegundaPagina},
  {path:'', redirectTo: 'PrimeiraPagina', pathMatch: 'full'},
  {path:'**',component:PrimeiraPagina}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
