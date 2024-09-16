import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeltaMenuComponent } from './components/menu/delta.menu.component';
// import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter'; 
import { SharedModule } from './shared/shared.module';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { PanelModule } from 'primeng/panel';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    DeltaMenuComponent,
    AnalysisComponent,
    SharedModule,
    AppRoutingModule,
    SplitterModule,
    PanelModule,
    MegaMenuModule
    // SidebarModule
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