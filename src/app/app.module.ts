import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeltaMenuComponent } from './components/menu/delta.menu.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    DeltaMenuComponent,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }