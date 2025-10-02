// los servicios son logica accesible desde cualquier parte de un proyecto
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // para usar GET, POST, PUT, DELETE
import { Product } from '../interfaces/product';
import { environment } from '../../environments/envionments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //1. inyección de dependencias y/o directivas de Angular
  private httpClient = inject(HttpClient);
  
  // 2. definir ruta de acceso al back
  private apiUrl = environment.appUrl; //url general del backend

  // 3. metodos para hacer las peticiones
  
  // peticion post
  postProduct(productToCreate : Product ){
    return this.httpClient.post(this.apiUrl + '/products/crear', productToCreate);
  };

  // peticion get 
  getProducts(){
    return this.httpClient.get(this.apiUrl + '/products/mostrar')
  };

  // peticion put
  putProduct(productToUpdate: Product, id:string){
    // return this.httpClient.put(this.apiUrl + '/products/actualizar/' + id, productToUpdate); //Opcion1
    return this.httpClient.put(`${this.apiUrl}/products/actualizar/${id}`, productToUpdate); //opcion2
  }; 

  // peticion delete
  deleteProduct(id : string){
    // return this.httpClient.delete(this.apiUrl + '/products/eliminar/' + id);
    return this.httpClient.delete(this.apiUrl + '/products/eliminar/' , {
      params :{id}
    }); //Opcion3
  };  
}
