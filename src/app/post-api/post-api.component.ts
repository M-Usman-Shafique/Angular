import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
})
export class PostAPIComponent {
  @Input() posts: any[] = [];
  @Input() apiUrl: string = '';
  @Output() newPost = new EventEmitter<any>();
  newPostTitle: string = '';

  constructor(private http: HttpClient) {}
  createPost() {
    if (!this.newPostTitle.trim()) return;
    const newPost = { title: this.newPostTitle };
    this.http.post(this.apiUrl, newPost).subscribe((response: any) => {
      this.newPost.emit(response);
      this.newPostTitle = '';
    });
  }
}
