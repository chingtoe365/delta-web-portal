import { NgModule }      from '@angular/core';
import { CandleStickChartComponent } from './charts/candlestick.chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    // ApexCharts,
    NgApexchartsModule
  ],
  declarations: [
    CandleStickChartComponent
  ],
  providers: [
  ],
  exports: [
    CandleStickChartComponent
  ]
})
export class SharedModule { }