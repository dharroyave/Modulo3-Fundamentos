import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl;

  // metodos para hacer las peticiones -> DETERMINA sus controladores

  // peticion post
  postUser(userToCreate: User) {
    return this.httpClient.post(`${this.apiUrl}/users`, userToCreate);
  }

  // peticion get
  getUser() {
    return this.httpClient.get(`${this.apiUrl}/Users`);
  }

  // peticion put
  putUser(userToUpdate: User, id: string) {
    return this.httpClient.put(`${this.apiUrl}/users/${id}`, userToUpdate);
  }

  // peticion delete
  deleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/users/${id}`);
  }
}
