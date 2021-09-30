import { Component, OnInit, Output } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula'

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() peliculasEmitter : EventEmitter<any> = new EventEmitter();
  peliculasArray : any[] = [];
  
  

  constructor(private peliculaS : PeliculaService) { 

    this.peliculaS.peliculas
    .subscribe((data : any)=>{

      this.peliculasArray = data;

    });
  }

  ngOnInit(): void {
  }

  ObtenerDatosSeleccionado(pelicula : Pelicula){

    this.peliculasEmitter.emit(pelicula);

  }



}
