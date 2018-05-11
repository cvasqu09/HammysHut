import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { PostComponent } from '../posts/post/post.component';
import { appRoutes } from '../frontend.routing';
import { DebugElement } from '@angular/core';
import { AuthService } from '../authentication.service';

describe('HomeComponent', () => {
	let homeComponent: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
	let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, PostComponent],
      imports: [
      	ReactiveFormsModule, 
      	RouterTestingModule
      ],
      providers: [AuthService]
    });
    fixture = TestBed.createComponent(HomeComponent);
    homeComponent = fixture.debugElement.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should not display the new log container if the user is not authenticated', () => {
  	spyOn(authService, 'isAuthenticated').and.returnValue(false);
  	fixture.detectChanges();
  	let newLogContainer = fixture.debugElement.nativeElement.querySelector('#new-log-container');
  	expect(newLogContainer).toBeFalsy();
  });

  it('should display the new log container if the user is authenticated', () => {
  	spyOn(authService, 'isAuthenticated').and.returnValue(true);
  	fixture.detectChanges();
  	let newLogContainer = fixture.debugElement.nativeElement.querySelector('#new-log-container');
  	expect(newLogContainer).toBeTruthy();
  })
});
