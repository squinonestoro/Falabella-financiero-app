import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryInfoComponent } from './history-info/history-info.component';


const routes: Routes = [

  {
    path: '',
    component: HistoryInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
