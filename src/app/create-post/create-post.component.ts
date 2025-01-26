import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  newPostTitle = '';

  constructor(private postService: PostsService) {}

  createPost() {
    if (!this.newPostTitle.trim()) return;
    this.postService.createPost({ title: this.newPostTitle }).subscribe();
    this.newPostTitle = '';
  }
}
