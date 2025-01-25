import { Component } from '@angular/core';
import { PostAPIComponent } from '../post-api/post-api.component';
import { GetAPIComponent } from '../get-api/get-api.component';

@Component({
  selector: 'app-home',
  imports: [PostAPIComponent, GetAPIComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  posts: any[] = [];
  apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/posts';

  addPost(newPost: any) {
    this.posts.push(newPost);
  }
}
