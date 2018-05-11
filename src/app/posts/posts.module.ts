import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    PostComponent,
  ],
})
export class PostsModule {

}
