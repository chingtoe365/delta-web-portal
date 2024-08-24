import { NgModule }      from '@angular/core';
import { CandleStickChartComponent } from './charts/candlestick.chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchBarComponent } from './search.bar.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    NgApexchartsModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [
    CandleStickChartComponent,
    SearchBarComponent,
  ],
  providers: [
  ],
  exports: [
    CandleStickChartComponent,
    SearchBarComponent,
  ]
})
export class SharedModule { }