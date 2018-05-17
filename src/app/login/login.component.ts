import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public newUserForm: FormGroup;
  public uName: string = '';
  public fName: string = '';

  @ViewChild('modalButton') private modalButton: ElementRef;

  constructor(private userService: UserService, private authService: AuthService) { }

  public ngOnInit() {
    this.authService.handleAuthentication();

    this.newUserForm = new FormGroup({
      username: new FormControl(this.uName, [Validators.required,
                                       Validators.pattern(new RegExp('^[A-Za-z0-9- ]+$')),
                                       Validators.minLength(5)]),
      fullName: new FormControl(this.fName, [Validators.required,
                                       Validators.minLength(10),
                                       Validators.pattern(new RegExp('^[A-Za-z0-9- ]+$'))]),
    });

    const currentUser = localStorage.getItem('user_id');
    this.userService.getUser(currentUser).subscribe((response: Response) => {
      console.log(response.status);
    }, (error: Response) => {
      const err: object = new Object(error);
      if(err.code === 404) {
        this.modalButton.nativeElement.click();
      }
    });
  }

  get username(): AbstractControl {
    return this.newUserForm.get('username');
  }

  get fullName(): AbstractControl {
    return this.newUserForm.get('fullName');
  }

}
