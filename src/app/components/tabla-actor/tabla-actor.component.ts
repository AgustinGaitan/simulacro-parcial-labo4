import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  actores : any;
  @Output() actoresEmitter : EventEmitter<any> = new EventEmitter();

  constructor(private actor : ActorService) {
     this.actor.actores
     .subscribe((data)=>{

      this.actores = data;

     });
  }

  ngOnInit(): void {
  }


  ObtenerActorSeleccionado(actor : any){
    this.actoresEmitter.emit(actor);
    
  }

}
