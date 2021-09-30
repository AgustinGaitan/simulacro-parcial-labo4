import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() actorDetalles : any;

  constructor(private actorService : ActorService) { 
    
  }

  ngOnInit(): void {
  }

}
