import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService) { }

  public ngOnInit() {
    this.authService.handleAuthentication();
    // this.userService.getUsers().subscribe((user) => {
    //   const currentUser = localStorage.getItem('user_id');
    // });
  }

}
