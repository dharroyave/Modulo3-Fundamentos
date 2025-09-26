import { Component } from '@angular/core';
//1. Importar la clase del componente y agregarlos a los import
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
