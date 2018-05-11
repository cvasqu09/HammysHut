import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	postForm: FormGroup;
	editMode: boolean = false;

  constructor() { }

  ngOnInit() {
  	this.postForm = new FormGroup({
  		'message': new FormControl(null),
  		'username': new FormControl(null)
  	});
  }

  onEdit() {
  	this.editMode = !this.editMode;
  }

  onSubmit() {
  	console.log(this.postForm.controls.message.value);
  	this.editMode = false;
  }

}
