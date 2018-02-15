import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryInfoComponent } from './history-info/history-info.component';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryInfoComponent]
})
export class HistoryModule { }
