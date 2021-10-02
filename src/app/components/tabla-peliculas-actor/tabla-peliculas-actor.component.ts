import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-tabla-peliculas-actor',
  templateUrl: './tabla-peliculas-actor.component.html',
  styleUrls: ['./tabla-peliculas-actor.component.scss']
})
export class TablaPeliculasActorComponent implements OnInit {

  @Input() actorPelicula : any = '';
  peliculasAMostrar : any[] = [];

  constructor(private pelicula : PeliculaService) {
     
    this.pelicula.peliculas.subscribe((data : any)=>{
      console.log("pelicula: " + pelicula);
      console.log("actor:" + this.actorPelicula);
   
      for(let pelicula of data){
  
        if(pelicula.actor == this.actorPelicula.nombre){
          console.log(pelicula);
          this.peliculasAMostrar.push(pelicula);
          
         }
        
      }
    });

  }

   ngOnInit(): void {
  }


}
