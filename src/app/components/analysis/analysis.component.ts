import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignalSubmitComponent } from '../forms/signal.submit.component';
import { NewsAbstractOverlayComponent } from '../news/news.abstract.overlay.component';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CandleStickChartComponent } from '../../shared/charts/candlestick.chart.component';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    SharedModule,
    SignalSubmitComponent,
    NewsAbstractOverlayComponent,
    OverlayPanelModule,
    ButtonModule
  ],
  templateUrl: './analysis.component.html',
  styles: ``
})
export class AnalysisComponent {

  @ViewChild('candlestickChart') candlestickChart: CandleStickChartComponent;

  selectedTradeItem: string = "";
  selectedNewsKeyword: string = "";
  selectedNewsTitle: string = "";

  @Input() newsDialogVisible: boolean = false;
  @Output() newsDialogVisibleChange: EventEmitter<any> = new EventEmitter();

  constructor(private cdref: ChangeDetectorRef){
    
  }
  

  onTradeItemSubmitted(event: any){
    this.selectedTradeItem = event.item
  }

  onNewsSubmitted(event: any){
    this.selectedNewsKeyword = event.item
  }

  onAnnotationClick(event: PointerEvent){
    console.log("Annotation clicked");
    console.log(event);
    this.newsDialogVisible = true;
    this.newsDialogVisibleChange.emit(this.newsDialogVisible);
    this.selectedNewsTitle = "";
    this.cdref.detectChanges();
  }

  refreshCandlestickChart(event: boolean){
    console.log("Refresh candlestick chart");
    console.log(event);
    this.candlestickChart.refreshChart();
  }

}
