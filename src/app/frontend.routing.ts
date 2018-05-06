import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full'},
	{ path: "home", component: HomeComponent },
	{ path: "login", component: LoginComponent }
];


// Registers the frontend routes in angular
export const appRoutes = RouterModule.forRoot(ROUTES);