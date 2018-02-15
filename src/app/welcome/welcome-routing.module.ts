import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';


const routes: Routes = [

  {
    path: '',
    component: WelcomeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
