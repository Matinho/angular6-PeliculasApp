import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNenes: any;

  constructor( public _peliculasService: PeliculasService ) {
    
    this._peliculasService.getCartelera()
          .subscribe( data => this.cartelera = data);

    this._peliculasService.getPopulares()
        .subscribe( data => this.populares = data);

    this._peliculasService.getPopularesNenes()
      .subscribe( data => this.popularesNenes = data );
  }

  ngOnInit() {
  }

}
