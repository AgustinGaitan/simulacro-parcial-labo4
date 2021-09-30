import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  actorSeleccionado : any = '';
  mostrarTabla : boolean = false;
  mostrarPais : boolean = false;
  mostrarDetalles : boolean = false;

  constructor() {

   
  }

  ngOnInit(): void {
  }


  ObtenerDatos(e : any){
   
    this.actorSeleccionado = e;
    this.mostrarPais = true;
    this.mostrarDetalles = true;
  }

  MostrarActores(){
    this.mostrarTabla = true;
  }

  Limpiar(){
    this.mostrarPais = false;

  }

  LimpiarDetalle(){
    this.mostrarDetalles = false;
  }
}
