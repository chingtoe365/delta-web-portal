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

  private _inputItem: any;
  
  @Output()
  inputSubmitted: EventEmitter<string> = new EventEmitter<string>();
  
  @Input() set inputItem(value: any) {
    this._inputItem = value;
  }

  get inputItem() {
    return this._inputItem;
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
    this.inputSubmitted.emit(this._inputItem);
  }
}
