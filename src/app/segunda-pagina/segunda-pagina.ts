import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  standalone: false,
  templateUrl: './segunda-pagina.html',
  styleUrl: './segunda-pagina.scss'
})
export class SegundaPagina {

  constructor(private route:Router){}

  irParaPrimeiraPagina(){
    this.route.navigate(['primeira-pagina']);
  }
}
