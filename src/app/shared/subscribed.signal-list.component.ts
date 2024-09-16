import { Component, OnInit } from '@angular/core';

type Signal = {
  name: string;
  description: string;
  category: string;
  config: ChangeSignalConfig;
}

type ChangeSignalConfig = {
  percentage: number;
  isUp: boolean;
  duration: number;
}


@Component({
  selector: 'app-subscribed-signal-list',
  templateUrl: './subscribed.signal-list.component.html',
  // styleUrls: ['./subscribed.signal-list.component.css'],
})
export class SubscribedSignalListComponent implements OnInit {
  signals: Signal[] = [];
  filteredSignals: Signal[] = [];
  filteredSignalName: string = '';

  constructor() {}

  ngOnInit() {
    this.signals = [
      {
        name: "GBP/USD", 
        description: "Go up for 1% within an hour", 
        category: "change", 
        config: {
          percentage: 0.01, isUp: true, duration: 3600
        } as ChangeSignalConfig
      } as Signal,
      {
        name: "USD/JPY", 
        description: "Go down for 1% within an hour", 
        category: "change", 
        config: {
          percentage: 0.01, isUp: false, duration: 3600
        } as ChangeSignalConfig
      } as Signal,
    ];

    // Initially display all products
    this.filteredSignals = this.signals;
  }

  filterSignals() {
    if (this.filteredSignalName) {
      this.filteredSignals = this.signals.filter((s) =>
        s.name.toLowerCase().includes(this.filteredSignalName.toLowerCase())
      );
    } else {
      this.filteredSignals = this.signals;
    }
  }
}