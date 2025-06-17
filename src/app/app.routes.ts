import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {component: HomeComponent, path: ''},
    {component: DashComponent, path: 'dash'},
    {component: ToggleComponent, path: 'toggle'},
    {component: LoginComponent, path: 'login'},
    {component: SignupComponent, path: 'signup'},
    {component: DetailsComponent, path : 'details'}
];
