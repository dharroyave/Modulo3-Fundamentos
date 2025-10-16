import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _loginService = inject(LoginService);
  const _router = inject(Router);
    
  // 1. Validacion: ya inicio sesion?
  if(!_loginService.isloggedIn()){
    alert('No has iniciado sesión')
    _router.navigate(['/login']);
    return false;
  }

  // 2. Validacion: es admon?
  if(!_loginService.isAdmin()){
    alert('Acceso denegado, serás redireccionado al inicio')
    _router.navigate(['/']);
    return false;
  }

  return true;
};
