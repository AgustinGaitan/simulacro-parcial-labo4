import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-pais-actor',
  templateUrl: './pais-actor.component.html',
  styleUrls: ['./pais-actor.component.scss']
})
export class PaisActorComponent implements OnInit {

  @Input() actorInput : any = '';

  
  constructor(private actor : ActorService) {

  }

  ngOnInit(): void {
  }

}
