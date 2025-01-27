import { Component } from '@angular/core';
import { ShowPostsComponent } from '../show-posts/show-posts.component';

@Component({
  selector: 'app-wrapper',
  imports: [ShowPostsComponent],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {}
