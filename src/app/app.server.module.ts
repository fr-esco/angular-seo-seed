import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    // https://github.com/angular/flex-layout/blob/master/guides/SSR.md
    FlexLayoutServerModule,
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
