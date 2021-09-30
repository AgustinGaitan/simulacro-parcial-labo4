import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  paisSeleccionado : any = '';
  controles !: FormGroup;
  
  constructor(private fb : FormBuilder, private actorService : ActorService) { }

  ngOnInit(): void {
    this.controles = this.fb.group({
      'nombre': ['', [Validators.required, this.ValidadorDeEspacios]],
      'apellido': ['', [Validators.required, this.ValidadorDeEspacios]],
      'pais': ['', Validators.required]
    });
  }

  MostrarPaisSeleccionado(e : any){
    this.paisSeleccionado = e;
    this.controles.get('pais')?.setValue(e);
  }

  getNombre(){
    return this.controles.get('nombre')?.value;
  }
  getApellido(){
    return this.controles.get('apellido')?.value;
  }
  getPais(){
    return this.controles.get('pais')?.value;
  }
  Enviar(){
    
    let actor = new Actor( this.getNombre(), this.getApellido(), this.getPais());
    console.info("Actor :", actor);
    this.actorService.SetearActor(actor)
    .then(()=>{
      console.log('Actor agregado.');
    });

  }

  private ValidadorDeEspacios(control : AbstractControl) : null | object {

    let nombre : string = control.value;

    let espacios = nombre.includes(' ');

    if(espacios){
      return {validadorDeEspacios : true};
    }else{
      return null;
    }

  }
}
