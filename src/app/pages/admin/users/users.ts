import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/users';
import { User } from '../../../interfaces/user';
import Swal from 'sweetalert2';
// Si va a hacer creación (POST) o actualizacion (PUT), DEBE TRABAJAR CON FORMULARIOS

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  // 1. injección de dependencias e inicializacion de variables
  private _userService = inject(UserService);
  allUsers: User[] = [];

  // 2. formgroups y formcontrols que necesite
  // ...

  // 3. metodos que permiten hacer las peticiones y gestionar las respuestas
  showUsers() {
    // hace la peticion GET
    this._userService.getUser().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allUsers = res.data;
        console.log(this.allUsers);
      },
      error: (err: any) => {
        console.error(err.error.mensaje);
      },
    });
  }

  deleteUser(id: string) {
    // hace la petición DELETE
    console.log('Id del Usuario a eliminar: ', id);
    this._userService.deleteUser(id).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: 'usuario eliminado',
          text: res.mensaje,
          icon: 'success',
        }).then(() => {
          this.showUsers();
        });
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  updateUsersInfo(id: string) {
    // Hace la peticón PUT
    // ... tomar como referencia el registro de usuarios
    console.log('Id del Usuario a editar: ', id);
  }

  ngOnInit(): void {
    this.showUsers();
  }
}
