import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  imports: [FormsModule],
  templateUrl: './update-post.component.html',
})
export class UpdatePostComponent {
  @Input() post: any;
  @Output() updated = new EventEmitter<void>();

  constructor(private postService: PostsService) {}

  ngOnInit() {
    if (!this.post.newTitle) {
      this.post.newTitle = this.post.title;
    }
  }

  updatePost() {
    if (!this.post.newTitle.trim()) return;
    this.postService.updatePost(this.post.id, { title: this.post.newTitle }).subscribe(() => {
      this.updated.emit();
    });
  }
}
