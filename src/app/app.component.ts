import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'app';
  // router: Router;

  constructor(public authService: AuthService) {
    // this.router = _router;
  }

}
