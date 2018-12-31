import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero.service';
import { InMemoryDataService } from './in-memory-data.service';
import { SharedModule } from './shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-id' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    // tslint:disable-next-line:ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    @Inject(APP_ID) private readonly appId: string) {
    const platform = isPlatformBrowser(this.platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${this.appId}`);
  }
}
