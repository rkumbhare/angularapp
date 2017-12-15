import { Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { DataBindingComponent } from './component/databinding/databinding.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'databinding', component: DataBindingComponent },
      { path: 'form-validation', component: FormValidationComponent }
    ]
  },

];
