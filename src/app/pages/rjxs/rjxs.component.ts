import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styles: [
  ]
})
export class RjxsComponent implements OnDestroy {

  saludo: string = 'Hola';
  //intervaloSub: Subscription;
  constructor() {
    //this.intervaloSub = this.retornaIntervalo().subscribe(console.log);
  }


  retornaIntervalo(): Observable<number> {
    //CODIGO MAS LIMPIO
    return interval(200)
      .pipe(
        map(valor => valor + 1), //el recibe los valores y le suma uno, retornando 0+1, n+1+1, n+2+1, n+1...
        filter(valor => (valor % 2 === 0) ? true : false),   //me sirve para filrar datos
        //take(10), //take (n) emite cuatro valores 0, n+1, n+2, n...
      )

    // const intervalo$ = interval(1000)
    //   .pipe(
    //     take(4),
    //     map(valor => valor + 1)
    //   )
    // return intervalo$;
  }

  ngOnDestroy(): void {
    //this.intervaloSub.unsubscribe(); //se desuscribe, cuando cambias de componente en la pagina, deja de ejecutar el metodo
    //hasta que vuelva al dicho de componente
  }

}
