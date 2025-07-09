import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-protegida',
  standalone: false,
  templateUrl: './pagina-protegida.html',
  styleUrl: './pagina-protegida.scss'
})
export class PaginaProtegida {

  constructor(private auth: AuthService, private router:Router){  }

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }



}
