import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './http.component.html',
  styleUrls: [],
})
export class HttpComponent {
  posts: any[] = [];
  apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/posts';
  newPostTitle: string = '';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.posts = response.map((post: any) => ({
        ...post,
        newTitle: post.title,
      }));
    });
  }

  createPost() {
    if (!this.newPostTitle.trim()) return;
    const newPost = { title: this.newPostTitle };
    this.http.post(this.apiUrl, newPost).subscribe((response: any) => {
      this.posts.push({ ...response, newTitle: response.title });
      this.newPostTitle = '';
    });
  }

  updatePost(id: string, title: string) {
    if (!title.trim()) return;
    const updatedPost = { title };
    this.http
      .put(`${this.apiUrl}/${id}`, updatedPost)
      .subscribe((response: any) => {
        const post = this.posts.find((post) => post.id === id);
        if (post) {
          post.title = response.title;
          post.newTitle = response.title;
        }
      });
  }
  

  deletePost(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
}
