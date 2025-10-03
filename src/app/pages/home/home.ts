import { Component } from '@angular/core';
//1. Importar la clase del componente y agregarlos a los import
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
