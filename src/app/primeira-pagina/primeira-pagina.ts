import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina',
  standalone: false,
  templateUrl: './primeira-pagina.html',
  styleUrl: './primeira-pagina.scss'
})
export class PrimeiraPagina {


  constructor(private route: Router){}

  irParaSegundaPagina(){
    this.route.navigate(['segunda-pagina']);
  }


}
