import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  mostrarPelicula : boolean = false;
  peliculasActor : any[] = [];

  constructor(private pelicula : PeliculaService) {
   
  }

  ngOnInit(): void {
  }


  ObtenerDatos(e : any){
    

    this.actorSeleccionado = e;
  
    this.mostrarPais = true;
    this.mostrarDetalles = true;
    this.peliculasActor = [];
    this.mostrarPelicula = true

        this.pelicula.peliculas.subscribe((data : any)=>{
      for(let pelicula of data){
  
        if(pelicula.actor == this.actorSeleccionado.nombre){
          console.log(pelicula);
          this.peliculasActor.push(pelicula);
          
         }
        
      }
    });
    
    
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
  LimpiarPelicula(){
    this.mostrarPelicula = false;
  }
}
