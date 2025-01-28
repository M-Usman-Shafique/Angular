import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  @Output() postCreated = new EventEmitter<any>();
  newPostTitle = '';
  newPostImage = '';

  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {}

  createPost() {
    if (!this.newPostTitle.trim() && !this.newPostImage.trim()) return;

    const user = this.userService.getUser();
    const userId = user?.id;

    if (!userId) {
      return;
    }

    const postData = {
      title: this.newPostTitle,
      image: this.newPostImage,
      userId,
    };

    this.postService.createPost(postData).subscribe((newPost) => {
      this.postCreated.emit(newPost);
      this.newPostTitle = '';
      this.newPostImage = '';
    });
  }
}
