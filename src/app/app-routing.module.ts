import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'welcome',
    loadChildren: 'app/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'history',
    loadChildren: 'app/history/history.module#HistoryModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
