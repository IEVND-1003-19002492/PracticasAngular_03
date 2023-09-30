import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})
export class PotenciasComponent {
  num1:string="";
  num2:number=0;
  resultado:string="";
  final:string="";
  operacion:number=0;

  calcular(){
    for (let i = 0; i < this.num2; i++) {
      if(i<this.num2-1){
        this.resultado+=this.num1+'+';
      }else{
        this.resultado+=this.num1+'=';
      } 
      //this.operacion=this.operacion+parseInt(this.num1);
    }
    this.final=this.resultado;
    this.operacion=parseInt(this.num1)*this.num2;
  }
}
