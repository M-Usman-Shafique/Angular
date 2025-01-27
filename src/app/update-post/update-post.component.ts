import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-post',
  imports: [FormsModule, NgIf],
  templateUrl: './update-post.component.html',
})
export class UpdatePostComponent {
  @Input() post: any;
  @Output() updated = new EventEmitter<void>();
  isEditing = false;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    if (!this.post.newTitle) {
      this.post.newTitle = this.post.title;
      this.post.newImage = this.post.image;
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  updatePost() {
    if (!this.post.newTitle.trim() || !this.post.newImage.trim()) return;

    this.postService
      .updatePost(this.post.id, {
        title: this.post.newTitle,
        image: this.post.newImage,
      })
      .subscribe((updatedPost) => {
        this.updated.emit(updatedPost);
        this.isEditing = false;
      });
  }
}
