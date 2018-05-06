import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './frontend.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
