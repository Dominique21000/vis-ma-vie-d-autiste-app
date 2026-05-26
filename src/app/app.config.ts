import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { routes } from './app.routes';


//import { routes } from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { Dsm5Component } from './autism-definitions/dsm-5/dsm-5.component';

/*const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'dsm-5', component: Dsm5Component}
];
*/



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};