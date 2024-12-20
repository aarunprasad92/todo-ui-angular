import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: ErrorComponent }
];