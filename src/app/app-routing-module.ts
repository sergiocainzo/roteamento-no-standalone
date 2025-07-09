import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { PaginaComParametros } from './pagina-com-parametros/pagina-com-parametros';

const routes: Routes = [
  { path: 'primeira-pagina', component: PrimeiraPagina },
  { path: 'segunda-pagina', component: SegundaPagina },
  { path: 'pagina-com-parametros/:id', component: PaginaComParametros },
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading-module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  { path: '**', component: PaginaNaoEncontrada },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
