// import { Routes } from '@angular/router';
// import { LandingComponent } from './Pages/landing/landing.component';
// import { SearchpgComponent } from './Pages/searchpg/searchpg.component';

// export const routes: Routes = [
//   { path: '', component: LandingComponent },
//   { path: 'search', component: SearchpgComponent}
// ];



import { Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'search', loadComponent: () => import('./Pages/searchpg/searchpg.component').then(m => m.SearchpgComponent) }
];
