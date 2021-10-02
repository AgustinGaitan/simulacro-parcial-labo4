import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-tabla-peliculas-actor',
  templateUrl: './tabla-peliculas-actor.component.html',
  styleUrls: ['./tabla-peliculas-actor.component.scss']
})
export class TablaPeliculasActorComponent implements OnInit {

  @Input() peliculaAMostrar : any = '';

  constructor(private pelicula : PeliculaService) {
     


  }

   ngOnInit(): void {
  }


}
