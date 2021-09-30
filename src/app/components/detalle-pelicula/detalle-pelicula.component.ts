import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() inputSeleccionado : any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
