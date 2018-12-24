import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaCreditsComponent } from './components/credits/credits.component';
import { LaWelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LaWelcomeComponent },
  { path: 'credits', component: LaCreditsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule { }
