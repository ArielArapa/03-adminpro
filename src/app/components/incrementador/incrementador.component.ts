import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})

//primero se creo el components module y despues el componente incrementador para que se importara ahí

export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }
  @Input('valor') progreso: number = 50; // agregando comillas dentro de parentesis renombras el argumento.
  // @Input() progreso: number = 50; //con el input va a saber que el componente incrementador desde el padre va a poder recibir esta propiedad llamada progreso
  @Input() btnClass: string = "btn btn-primary";

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();//input y output son decoradores [con esto escucho]

  cambiarValor(valor: number) {
    if (this.progreso >= 100) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }
    if (this.progreso <= 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    }
    this.valorSalida.emit(this.progreso);
    this.progreso = this.progreso + valor;
  }


}
