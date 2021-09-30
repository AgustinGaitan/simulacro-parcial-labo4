import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculaSeleccionada : any = '';
  mostrarTabla : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ObtenerDatos(datosEvento : any){
    
    this.peliculaSeleccionada = datosEvento;

  }

  MostrarPeliculas(){
    this.mostrarTabla = true;
  }

  Limpiar(){
    this.peliculaSeleccionada = '';
  }

}
