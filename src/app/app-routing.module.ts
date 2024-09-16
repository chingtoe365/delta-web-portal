import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalListComponent } from './components/signal-list/signal-list.component';
import { AnalysisComponent } from './components/analysis/analysis.component';

const routes: Routes = [
  // { path: '', component: SignalListComponent },
  // { path: 'analysis', component: AnalysisComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }