import { BrowserModule } from '@angular/platform-browser';
import { PostsModule } from './posts/posts.module';
import { NgModule } from '@angular/core';

import { appRoutes } from './frontend.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    appRoutes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
