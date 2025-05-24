import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactusComponent},
    {path:'login',component:LoginComponent},
];
