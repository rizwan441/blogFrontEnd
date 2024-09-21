import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JWT_OPTIONS, JwtHelperService, } from '@auth0/angular-jwt';
import {  provideHttpClient } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
// import { jwtInterceptor } from './path/to/jwt.interceptor'; // Adjust the import path
import { HTTP_INTERCEPTORS } from '@angular/common/http';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, // Use factory to register functional interceptor
      multi: true,
    },
    provideHttpClient()
  ]
};
