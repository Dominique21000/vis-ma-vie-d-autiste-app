import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Dsm5Component } from './autism-definitions/dsm-5/dsm-5.component';
import { AutismDefinitionsListComponent } from './autism-definitions/autism-definitions-list/autism-definitions-list.component';


export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'dsm-5', component: Dsm5Component},
    { path: 'autism-definitions-list', component: AutismDefinitionsListComponent}
];