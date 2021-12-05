import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18Select
  nombre : string = 'Cristian';
  genero : string = 'M';
  invitacionMap={
    'F' : 'invitarla',
    'M' : 'invitarlo'
  }

  //i18nPlural
  cliente : string[] = ['maria','yessell','jose']
  clienteMap = {
    '=0' : 'No tenemos ningun ', 
    '=1' : 'tenemos # cliente esperando', 
    'other' : 'tenemos # clientes esperando'
  }


  constructor(
    private PrimenngConfig : PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.PrimenngConfig.ripple = true;
  }

  onCambiarCliente(genero : string){
    if(genero === 'F'){
      this.nombre = 'Leslye'
      this.genero = 'F'
    }else{
      this.nombre = 'Cristian';
      this.genero = 'M';
    }
   
  }

  onBorrarCliente(){
    this.cliente.pop();
    //this.cliente.shift();
  }

}
