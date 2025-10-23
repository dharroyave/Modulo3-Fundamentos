import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credencials } from '../../interfaces/credencials';
import { LoginService } from '../../services/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // variables e injeccion de servicios
  private _loginService = inject(LoginService);

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //manejo de eventos
  handleSubmit() {
    // const email = this.loginForm.value.emailLogin
    // const password = this.loginForm.value.passwordLogin
    // console.log(email, password)
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const credencials: Credencials = {
      emailLogin: this.loginForm.value.emailLogin || '',
      passwordLogin: this.loginForm.value.passwordLogin || '',
    };

    console.log('Credenciales para Login', credencials);

    this._loginService.login(credencials).subscribe({
      // manejo de la respuesta o error
      next: (res: any) => {
        console.log(res);
        if (res) {
          localStorage.setItem('token', res.token);

          Swal.fire({
            title: res.mensaje,
            icon: 'success',
            draggable: true,
          });

          this._loginService.redirectTo();
        }
      },
      error: (err: any) => {
        console.error('Mensaje de error: ');
        Swal.fire({
          title: 'Oops!',
          text: err.error.mensaje,
          icon: 'error',
          draggable: true,
        });
      },
    });
  }
}
