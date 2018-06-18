import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() peliculas: any[];
  @Input() populares: any[];
  @Input() popularesNenes: any[];
  @Input() titulo: string;

  constructor( private router: Router ) {
   }

}
