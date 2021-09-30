import { Component, Input, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-tabla-peliculas-actor',
  templateUrl: './tabla-peliculas-actor.component.html',
  styleUrls: ['./tabla-peliculas-actor.component.scss']
})
export class TablaPeliculasActorComponent implements OnInit {

  @Input() actorPelicula : any = '';
  peliculas : any[] = [];
  peliculasAMostrar : any[] = [];

  constructor(private pelicula : PeliculaService) {

    this.pelicula.peliculas.subscribe((data : any)=>{
      this.peliculas = data;
    });

    for(let pelicula of this.peliculas){
      if(pelicula.actor == this.actorPelicula.nombre){
        this.peliculasAMostrar.push(pelicula);
      }
    }
  }

   ngOnInit(): void {
  }


}
