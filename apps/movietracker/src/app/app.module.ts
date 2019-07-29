import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MovietrackerCoreModule } from '@mt/movietracker/core';
import {
  MovietrackerAuthModule,
  jwtInterceptorProvider,
  errorInterceptorProvider
} from '@mt/movietracker/auth';

import { routes } from './admin-app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false
    }),
    MovietrackerCoreModule,
    MovietrackerAuthModule
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
