import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DeltaMenuComponent } from '../menu/delta.menu.component';

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
  selector: 'app-signal-list',
  standalone: true,
  imports: [
    FormsModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule,
    DeltaMenuComponent
  ],
  templateUrl: './signal-list.component.html',
  styles: ``
})
export class SignalListComponent {
// sidebarVisible = false;
  // items: MenuItem[] = [
  //   {title: "File", icon: "pi pi-fw pi-file"},
  // ]
  signals : Signal[] = [
    {
      name: "GBP/USD", 
      description: "description1", 
      category: "change", 
      config: {
        percentage: 0.01, isUp: true, duration: 3600
      } as ChangeSignalConfig
    } as Signal,
    {
      name: "USD/JPY", 
      description: "description1", 
      category: "change", 
      config: {
        percentage: 0.01, isUp: false, duration: 3600
      } as ChangeSignalConfig
    } as Signal,
  ];
}
