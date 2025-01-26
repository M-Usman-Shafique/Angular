import { Component } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { ShowPostsComponent } from '../show-posts/show-posts.component';

@Component({
  selector: 'app-wrapper',
  imports: [CreatePostComponent, ShowPostsComponent],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {}
