import { NgModule }      from '@angular/core';
import { CandleStickChartComponent } from './charts/candlestick.chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchBarComponent } from './search.bar.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { SubscribedSignalListComponent } from './subscribed.signal-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    DataViewModule,
    InputTextModule
  ],
  declarations: [
    CandleStickChartComponent,
    SearchBarComponent,
    SubscribedSignalListComponent,
  ],
  providers: [
  ],
  exports: [
    CandleStickChartComponent,
    SearchBarComponent,
    SubscribedSignalListComponent
  ]
})
export class SharedModule { }