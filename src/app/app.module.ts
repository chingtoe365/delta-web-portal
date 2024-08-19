import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DeltaMenuComponent } from './components/menu/delta.menu.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    DeltaMenuComponent,
    AppRoutingModule,
    // RouterOutlet, 
    // RouterLink, 
    // RouterLinkActive, 
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