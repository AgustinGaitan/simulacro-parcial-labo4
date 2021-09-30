import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { CommonModule } from '@angular/common';
//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

//Api

import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { TablaPeliculasActorComponent } from './components/tabla-peliculas-actor/tabla-peliculas-actor.component';
import { PaisActorComponent } from './components/pais-actor/pais-actor.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    TablaPeliculasActorComponent,
    PaisActorComponent,
    DetalleActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
