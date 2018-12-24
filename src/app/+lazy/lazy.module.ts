import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LaCreditsComponent } from './components/credits/credits.component';
import { LaProductNameComponent } from './components/product/product.component';
import { LaWelcomeComponent } from './components/welcome/welcome.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LazyRoutingModule,
  ],
  declarations: [
    LaCreditsComponent,
    LaProductNameComponent,
    LaWelcomeComponent,
  ],
})
export class LazyModule { }
