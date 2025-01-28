import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { NgFor, NgIf } from '@angular/common';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-posts',
  imports: [
    NgFor,
    NgIf,
    UpdatePostComponent,
    DeletePostComponent,
    CreatePostComponent,
  ],
  templateUrl: './show-posts.component.html',
})
export class ShowPostsComponent implements OnInit {
  posts: any[] = [];
  isLoading: boolean = false;
  isEditingMap: { [postId: string]: boolean } = {};
  user: any;

  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.loadPosts();
  }
  loadPosts() {
    this.isLoading = true;
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data.reverse();
      this.isLoading = false;
    });
  }

  onPostCreated(newPost: any) {
    this.posts.unshift(newPost);
  }

  onPostDeleted(deletedId: string) {
    this.posts = this.posts.filter((post) => post.id !== deletedId);
  }

  onPostUpdated(updatedPost: any) {
    const index = this.posts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }

  onEditingState(postId: string, isEditing: boolean) {
    this.isEditingMap[postId] = isEditing;
  }
}
