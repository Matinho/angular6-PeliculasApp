import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = 'api_key=9013fdd971c08a40247bac24b78ebd21';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private lenguaje = 'language=es';

  peliculas: any[] = [];

  constructor( private _http: HttpClient ) { }

  private getURL(peticion: string): string {

    return `${ this.urlMoviedb }${peticion}${ this.apiKey }&${ this.lenguaje }`;

  }

  getCartelera() {
    const fechaInicio = new Date() ;
    const fechaFin = new Date();
    fechaFin.setDate( fechaFin.getDate() + 7 );

    const fechaInicioStr = `${ fechaInicio.getFullYear() }-${ fechaInicio.getMonth() + 1 }-${ fechaInicio.getDay() }`;
    const fechaFinStr = `${ fechaFin.getFullYear() }-${ fechaFin.getMonth() + 1 }-${ fechaFin.getDay() }`;

    const peticion = `/discover/movie?primary_release_date.gte=${ fechaInicioStr }&primary_release_date.lte=${ fechaFinStr }&`;
    const populares = this.getURL(peticion);

    return this._http.jsonp( populares, 'callback=JSONP_CALLBACK' )
                        .pipe(map(res => res['results'] ));
  }

  getPopulares() {

    const peticion = '/discover/movie?sort_by=popularity.desc&';
    const populares = this.getURL(peticion);

    return this._http.jsonp( populares, 'callback=JSONP_CALLBACK' )
                        .pipe(map(res => res = res['results'] ));

  }

  getUnaPelicula( id: string ) {

    const peticion = `/movie/${ id }?`;
    const populares = this.getURL(peticion);

    return this._http.jsonp( populares, 'callback=JSONP_CALLBACK' )
                        .pipe(map(res => res ));

  }

  getPopularesNenes() {

    const peticion = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&';
    const populares = this.getURL(peticion);

    return this._http.jsonp( populares, 'callback=JSONP_CALLBACK' )
                          .pipe(map(res => res = res['results'] ));

  }

  getPelicula( texto: string ) {

    const peticion = `/search/movie?query=${ texto }&`;
    const populares = this.getURL(peticion);

    return this._http.jsonp( populares, 'callback=JSONP_CALLBACK' )
                        .pipe(map(res => {
                                            console.log(res);
                                            this.peliculas = res['results'];
                                            res = res['results'];
                                          }));
  }

}
