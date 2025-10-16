import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencials } from '../interfaces/credencials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode'; //para decodificar el token y poder saber si inicia sesion un admin o no
import { Router } from '@angular/router'; // redirecciona a otras paginas al iniciar sesión

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //1. inyectar y definir variables
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  private apiUrl = environment.appUrl;

  //2. desarrollo logica del servicio

  //2.1. Petición POST
  login(loginCredentials : Credencials){
    return this._httpClient.post(`${this.apiUrl}/login`, loginCredentials);
  }
  
  //2.2. decirle al navegador de donde va a obtener el token
  getToken(){
    // viene del LocalStorage -> almacenamiento temporal
    return localStorage.getItem('token'); //obtenemos el token del navegador
  }

  //2.3. validar si es rol de administrador o no
  isAdmin(){
    // primero necesito obtener el token
    const token = this.getToken();
    // en caso de que si haya token, decodifiquelo
    if(token){
      const decoded : any = jwtDecode(token);
      return decoded.admin === true ? true :false
    }else{
      console.log('no se encontro token');
      return false;
    }
  }

  //2.4. redireccion una vez que inicio sesión
  redirectTo(){

    // si es admon , redirecciona a /admin
    if(this.isAdmin()){
      this._router.navigate(['/admin']);
    }else{
      this._router.navigate(['/']);
    }
  }

  //2.5. el cierre de sesión
  logout(){
    localStorage.removeItem('token');
    alert('Cierre de sesión Exitoso, Vuelve pronto!');
    this._router.navigate(['/login']);
  }

  // 6. para saber si se inicio sesión o no
  isloggedIn(){
    return this.getToken() ? true : false;
  }
}
