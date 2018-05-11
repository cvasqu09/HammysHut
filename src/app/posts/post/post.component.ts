import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  public postForm: FormGroup;
  public editMode: boolean = false;

  constructor() { }

  public ngOnInit() {
    this.postForm = new FormGroup({
      message: new FormControl(null),
      username: new FormControl(null),
    });
  }

  public onEdit() {
    this.editMode = !this.editMode;
  }

  public onSubmit() {
    console.log(this.postForm.controls.message.value);
    this.editMode = false;
  }

}
