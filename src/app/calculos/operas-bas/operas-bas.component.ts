import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;

  operacion:string='';

  calcular(){
    switch (this.operacion) {
      case 'Suma':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
        break;
      case 'Resta':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
        break;
      case 'Multiplicacion':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
        break;
      case 'Division':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
        break;
    }
  }
}
