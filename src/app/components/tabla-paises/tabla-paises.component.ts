import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionadoEmitter : EventEmitter<any> = new EventEmitter();
  paises : any;

  constructor(private api : ApiService) {

   this.api.ObtenerPaises()
   .subscribe((data : any)=>{

    console.log(data);
    this.paises = data;

   });

  }

  ngOnInit(): void {
  }

  SeleccionarPais(pais : any){
    this.paisSeleccionadoEmitter.emit(pais);
  }

}
