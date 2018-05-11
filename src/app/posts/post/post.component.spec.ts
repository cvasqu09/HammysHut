import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PostComponent } from './post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'

describe('PostComponent', () => {
  let postComponent: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [ReactiveFormsModule]
    });
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    postComponent = fixture.debugElement.componentInstance;
  })

  it('should make the textarea is editable after clicking the edit icon', () => {
    var editButton = fixture.debugElement.nativeElement.querySelector('.fa-edit');
    expect(postComponent.editMode).toBeFalsy();
    editButton.click();
    fixture.detectChanges();
    expect(postComponent.editMode).toBeTruthy();
  })
});
