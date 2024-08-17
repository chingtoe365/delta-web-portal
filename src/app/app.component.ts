import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api/menuitem';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

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
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    CheckboxModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
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
