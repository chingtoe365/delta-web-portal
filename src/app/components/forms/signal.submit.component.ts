import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

type SignalCategory = {
  name: string;
  value: string;
}

@Component({
  selector: 'app-signal-submit',
  standalone: true,
  imports: [
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    CheckboxModule,
    ButtonModule,
    FormsModule, 
    InputTextModule
  ],
  templateUrl: './signal.submit.component.html',
  styles: ``
})
export class SignalSubmitComponent {

  signalCategories : SignalCategory[] = [
    { name: 'Change', value: 'change' }
  ];

  category: SignalCategory | undefined;
  isUp: boolean | undefined;
  percentage: number | undefined;
  duration: number | undefined;
  loading: boolean = false;

  constructor() {
  }

  createSignal() {
    console.log("Create signal");
    console.log("Category: " + this.category?.name);
    console.log("Is up: " + this.isUp);
    console.log("Percentage: " + this.percentage);
    console.log("Duration: " + this.duration);
  }

}
