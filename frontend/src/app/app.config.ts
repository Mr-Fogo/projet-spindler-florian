import { ApplicationConfig,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './cart/states/cart-state';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),importProvidersFrom(NgxsModule.forRoot([PanierState]))]
};