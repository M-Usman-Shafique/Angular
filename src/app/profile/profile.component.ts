import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any;
  posts: any[] = [];
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.loadPosts();
    }
  }

  loadPosts() {
    if (!this.user?.id) return;

    this.isLoading = true;
    this.postService.getUserPosts(this.user.id).subscribe({
      next: (data) => {
        this.posts = data.reverse();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
        this.isLoading = false;
      },
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
