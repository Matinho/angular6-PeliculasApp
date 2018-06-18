import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor(  public _peliculaService: PeliculasService,
                public route: ActivatedRoute) {

    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      if ( parametros['busqueda'] ) {
        this.busqueda = parametros['busqueda'];
      }

      this._peliculaService.getUnaPelicula( parametros['id'] )
            .subscribe( pelicula => {
              this.pelicula = pelicula;
              console.log( pelicula );
            } );
      });
    }

  ngOnInit() {
  }

}
