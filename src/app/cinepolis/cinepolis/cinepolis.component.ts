import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string="";
  numPer:number=0;
  numBoleto:number=0;
  tarjeta:number=0;
  resultado:string="";
  operacion:number=1;
  descuento:number=0;
  descuentoTarjeta:number=0;
  suma:number=0;

  calcular(){
    this.operacion=7*this.numPer;
    if(this.numBoleto<=this.operacion){
      if(this.nombre==""){
        this.resultado="Ingrese su nombre"
      }else{
        if(this.numPer!=0){
          if(this.numBoleto>this.operacion){ //Numero de boletos
            this.resultado="No se pueden comprar sus "+this.numBoleto+" boletos, el valor maximo son 7 por persona";
          }else if(this.numBoleto>0){
            //this.suma=this.numBoleto*this.numPer;
            if(this.tarjeta==1){ //Cuenta con tarjeta
              if(this.numBoleto>5){ //Cantidad boletos
                this.descuento=12*this.numBoleto;
                this.descuentoTarjeta=this.descuento-(this.descuento*0.25); 
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuentoTarjeta)+" con -15% descuento y -10% de tarjeta ";
              }else if(this.numBoleto<=5 && this.numBoleto>2){
                this.descuento=12*this.numBoleto; 
                this.descuentoTarjeta=this.descuento-(this.descuento*0.20); 
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuentoTarjeta)+" con -10% descuento y -10% de tarjeta ";
              }else{
                this.descuento=12*this.numBoleto; 
                this.descuentoTarjeta=this.descuento-(this.descuento*0.10); 
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuentoTarjeta)+" con -10% de tarjeta ";
              }
            }else if(this.tarjeta==2){ //no cuenta con tarjeta
              if(this.numBoleto>5){ //cantidad boletos
                this.descuento=12*this.numBoleto; /**Codigo Bien */
                this.descuentoTarjeta=this.descuento-(this.descuento*0.15); /*Codigo Bien */
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuentoTarjeta)+" con -15% descuento ";
              }else if(this.numBoleto<=5 && this.numBoleto>2){
                this.descuento=12*this.numBoleto; /**Codigo Bien */
                this.descuentoTarjeta=this.descuento-(this.descuento*0.10); /*Codigo Bien */
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuentoTarjeta)+" con -10% descuento ";
              }else{
                this.descuento=12*this.numBoleto; /**Codigo Bien */
                this.resultado=this.nombre+" Su total a pagar es $"+(this.descuento)+" ($12 por boleto) ";
              }
            }else{
              this.resultado="Ingrese si cuenta con tarjeta o no" ;
            }
          }else{
            this.resultado="Ingrese una cantidad de boletos adecuada";
          }
        }else{
          this.resultado="Ingrese una cantidad de compradores adecuada";
        }
      }
    }else if(this.numPer<=0 && this.numBoleto==0){ /**eliminar en caso de error */
    this.resultado="No puede comprar "+this.numBoleto+" boletos. Su maximo de compra es: "+this.operacion+ "(7 por persona)"; /**eliminar en caso de error */
    }else{
      this.resultado="Ingrese una cantidad de boletos adecuada (7 por cada persona)";
    }
  }

  salir(){
    window.location.reload();
  }
}
