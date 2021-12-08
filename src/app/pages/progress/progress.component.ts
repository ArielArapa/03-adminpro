import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso: number = 50;

  get getPorcentaje() { //es como una propiedad como progreso.number
    return `${this.progreso}%`; //devuelve 50%
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;

    if (this.progreso >= 100) {
      this.progreso = 100;
    }
    if (this.progreso <= 0) {
      this.progreso = 0;
    }


    // if (this.progreso >= 100 && valor >= 0) {
    //   return this.progreso = 100;
    // }
    // if (this.progreso <= 0 && valor <= 0) {
    //   return this.progreso = 0;
    // }

  }

}
