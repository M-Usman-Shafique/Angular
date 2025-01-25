import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DeleteAPIComponent } from '../delete-api/delete-api.component';
import { PutAPIComponent } from '../put-api/put-api.component';

@Component({
  selector: 'app-get-api',
  imports: [NgIf, NgFor, DeleteAPIComponent, PutAPIComponent],
  templateUrl: './get-api.component.html',
})
export class GetAPIComponent implements OnInit {
  @Input() posts: any[] = [];
  @Input() apiUrl: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

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

  updatePostInList(updatedPost: any) {
    const index = this.posts.findIndex((post) => post.id === updatedPost.id);
    if (index > -1) {
      this.posts[index] = { ...updatedPost, newTitle: updatedPost.title };
    }
  }
}
