import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeInfoComponent]
})
export class WelcomeModule { }
