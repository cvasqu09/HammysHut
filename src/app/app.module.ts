import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsModule } from './posts/posts.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthService } from './authentication.service';
import { appRoutes } from './frontend.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    PostsModule,
    appRoutes,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
