import { Component, inject, OnInit } from '@angular/core';
//1. importar el servicio porque queremos hacer get de los productos
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  // 1. la inyección de dependencias y declaracion de variables
  _productService = inject(ProductService);
  // variable
  allProducts: Product[] = []; // vamos almacenar todos los productos de la BD

  showProducts(){
    //1. voy a hacer la peticion get
    //2. voy a guardar los productos en mi variable all products
    //3. voy a mostrarlos en mi navegador  

    this._productService.getProducts().subscribe({
      // manejo de errores -> gestion de respuestas del back
      next:(response : any)=>{
        this.allProducts = response.data;
        console.log(this.allProducts)
      }, //respuestas positivas del back
      error:(error :any)=>{
        console.error(error);
      } //respuestas de error del back
      

    })
  }

  ngOnInit(): void {
    // ejecute una accion al cargarse por primera vez en el navegador
    this.showProducts();
  }

}
