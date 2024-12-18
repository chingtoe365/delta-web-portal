import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-news-abstract-overlay',
  standalone: true,
  imports: [
    // OverlayPanelModule,
    DialogModule,
    ButtonModule
  ],
  providers: [
    // OverlayPanel
  ],
  templateUrl: './news.abstract.overlay.component.html',
  styles: ``
})
export class NewsAbstractOverlayComponent {
  // @ViewChild('op') overlayComponent: OverlayPanel;
  @ViewChild('diag') dialogComponent: any;

  @Output() visibilityChange: EventEmitter<any> = new EventEmitter();

  private _newsTitle: string = "";
  private _newsAbstract: string = "";
  // private _visible: boolean = false;

  @Input() set newsTitle(value: string) {
    this._newsTitle = value;
  }
  
  get newsTitle(): string {
    return this._newsTitle;
  } 

  @Input() set newsAbstract(value: string) {
    this._newsAbstract = value;
  }

  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<any> = new EventEmitter();

  constructor(private cdref: ChangeDetectorRef){
  }

  close(): void{
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.cdref.detectChanges();
  }

}
