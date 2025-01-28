import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-delete-post',
  imports: [],
  templateUrl: './delete-post.component.html',
})
export class DeletePostComponent {
  @Input() id!: string;
  @Output() deleted = new EventEmitter<string>();

  constructor(private postService: PostsService) {}

  deletePost() {
    this.postService.deletePost(this.id).subscribe(() => {
      this.deleted.emit(this.id);
    });
  }
}
