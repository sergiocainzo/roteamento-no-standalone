import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injeta o AuthService
  const router = inject(Router); // Injeta o Router para Navegação

  if (authService.estaAutenticado()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }

};
