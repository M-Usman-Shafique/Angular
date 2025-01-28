import { Component } from '@angular/core';
import { ShowPostsComponent } from '../show-posts/show-posts.component';

@Component({
  selector: 'app-posts',
  imports: [ShowPostsComponent],
  templateUrl: './posts.component.html',
})
export class PostsComponent {}
