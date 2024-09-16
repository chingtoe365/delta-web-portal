import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignalSubmitComponent } from '../forms/signal.submit.component';
import { NewsAbstractOverlayComponent } from '../news/news.abstract.overlay.component';
import { ButtonModule } from 'primeng/button';
import { CandleStickChartComponent } from '../../shared/charts/candlestick.chart.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { ChipsModule } from 'primeng/chips';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    SharedModule,
    PanelModule,
    SignalSubmitComponent,
    NewsAbstractOverlayComponent,
    ButtonModule,
    SidebarModule,
    ChipsModule,
    FormsModule,
    FloatLabelModule
  ],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent{

  @ViewChild('candlestickChart') candlestickChart: CandleStickChartComponent;

  selectedTradeItem: string = "";
  selectedNewsKeyword: string = "";
  selectedNewsTitle: string = "";
  hasSubscribedSignals: boolean = true;

  newsKeywords : string[] = [];
  // formGroup: FormGroup;
  // @Input() newsKeywords: string[]  = [];
  // @Output() newsKeywordsChange: EventEmitter<any> = new EventEmitter();

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
