import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignalSubmitComponent } from '../forms/signal.submit.component';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    SharedModule,
    SignalSubmitComponent
  ],
  templateUrl: './analysis.component.html',
  styles: ``
})
export class AnalysisComponent {
  selectedTradeItem: string = "";
  selectedNewsKeyword: string = "";

  onTradeItemSubmitted(event: any){
    this.selectedTradeItem = event.item
  }

  onNewsSubmitted(event: any){
    this.selectedNewsKeyword = event.item
  }

}
