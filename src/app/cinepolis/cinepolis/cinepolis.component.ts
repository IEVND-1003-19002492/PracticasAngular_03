import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string="";
  numPer:string="";
  numBoleto:number=0;
  tarjeta:number=0;
  resultado:string="";

  calcular(){
    if(this.numBoleto>7){ //Numero de boletos
      this.resultado="No se pueden comprar sus "+this.numBoleto+" boletos, el valor maximo son 7 por persona";
    }else if(this.numBoleto>0){
      if(this.tarjeta=1){ //Cuenta con tarjeta
        if(this.numBoleto>5){ //Cantidad boletos
          this.resultado="15% descuento y 10% TARJETA";
        }else if(this.numBoleto<=5 && this.numBoleto>2){
          this.resultado="10% descuento y 10% TARJETA";
        }else{
          this.resultado="No descuento papu, PERO SI UN 10% TARJETA";
        }
      }else if(this.tarjeta=0){ //no cuenta con tarjeta
        if(this.numBoleto>5){ //cantidad boletos
          this.resultado="15% descuento";
        }else if(this.numBoleto<=5 && this.numBoleto>2){
          this.resultado="10% descuento";
        }else{
          this.resultado="No descuento papu";
        }
      }else{
        this.resultado="Ingrese si cuenta con tarjeta o no";
      }
    }else{
      this.resultado="Ingrese una cantidad adecuada";
    }
  }
}
