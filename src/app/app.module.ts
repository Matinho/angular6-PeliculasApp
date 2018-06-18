import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Rutas
import { APP_ROUTING } from './app.routes';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    SearchComponent,
    TarjetasComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientJsonpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
