import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo: string = "Sin titulo";

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = ['Titulo 1', 'Titulo 2', 'Titulo 3'];
  @Input('datos') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: ['#afafaf', '#fffaaa', '#ba3223'] },
    ]
  };
  @Input('type') doughnutChartType: ChartType = 'doughnut';

}
