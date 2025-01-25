import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DeleteAPIComponent } from '../delete-api/delete-api.component';

@Component({
  selector: 'app-get-api',
  imports: [NgIf, NgFor, DeleteAPIComponent],
  templateUrl: './get-api.component.html',
})
export class GetAPIComponent {
  @Input() posts: any[] = [];
  @Input() apiUrl: string = '';
  constructor(private http: HttpClient) {}

  getAllPosts() {
    this.http.get(this.apiUrl).subscribe((response: any) => {
      this.posts = response.map((post: any) => ({
        ...post,
        newTitle: post.title,
      }));
    });
  }

  removePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
