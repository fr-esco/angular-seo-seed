import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './material.module';

@NgModule({
  imports: [FlexLayoutModule, AppMaterialModule],
  exports: [FlexLayoutModule, AppMaterialModule],
})
export class SharedModule { }
