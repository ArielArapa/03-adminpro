import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo: string = "Ventas";
  labels: string[] = ['ariel', 'lucas', 'matias'];
  dato1 = {
    labels: this.labels,
    datasets: [
      { data: [100, 250, 150], backgroundColor: ['#454545', '#FF2D00', '#322323'] },
    ]
  }
  tipo: string = "doughnut";
}
