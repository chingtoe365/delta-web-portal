import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search.bar.component.html',
  styles: ``
})
export class SearchBarComponent {
  private _inputCategory: string = "";
  private _inputItem: any;
  private _placeHolder: string = "Search Crypto/Stocks/Forex/Commodities with symbols or names";

  @Input() set inputCategory(value: string) {
    this._inputCategory = value;
  }

  @Output()
  inputSubmitted: EventEmitter<any> = new EventEmitter<any>();


  @Input() set inputItem(value: any) {
    this._inputItem = value;
  }

  get inputItem() {
    return this._inputItem;
  }
  
  @Input() set placeHolder(value: string) {
    this._placeHolder = value;
  }

  get placeHolder() {
    return this._placeHolder;
  }

  constructor() {
  }

  suggestions: any[] = [];

  completeSearch(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

 
  submitSearch(event: any) {
    console.log("search submitted")
    console.log(this._inputItem);
    this.inputSubmitted.emit(
      {"category": this._inputCategory, "item": this._inputItem}
    );
  }
}
