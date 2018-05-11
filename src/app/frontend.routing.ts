import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

const ROUTES: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full'},
	{ path: "home", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "profile", component: ProfileComponent },
	{ path: "about-us", component: AboutComponent }
];


// Registers the frontend routes in angular
export const appRoutes = RouterModule.forRoot(ROUTES);