import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [NgIf, NgFor],
  templateUrl: './get-api.component.html',
})
export class GetAPIComponent {
  posts: any[] = [];
  apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/posts';
  newPostTitle: string = '';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.posts = response;
    });
  }
}
