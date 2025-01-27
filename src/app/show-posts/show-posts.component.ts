import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { NgFor, NgIf } from '@angular/common';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { CreatePostComponent } from '../create-post/create-post.component';

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

  constructor(private postService: PostsService) {}

  ngOnInit() {
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
}
