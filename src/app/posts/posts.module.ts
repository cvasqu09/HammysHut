import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		PostComponent
	],
	imports: [
		CommonModule,
    ReactiveFormsModule
	],
	exports:[
		PostComponent
	]
})
export class PostsModule {

}