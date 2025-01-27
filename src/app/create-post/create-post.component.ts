import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  @Output() postCreated = new EventEmitter<any>();
  newPostTitle = '';
  newPostImage = '';

  constructor(private postService: PostsService) {}

  createPost() {
    if (!this.newPostTitle.trim() && !this.newPostImage.trim()) return;

    this.postService
      .createPost({ title: this.newPostTitle, image: this.newPostImage })
      .subscribe((newPost) => {
        this.postCreated.emit(newPost);
        this.newPostTitle = '';
        this.newPostImage = '';
      });
  }
}
