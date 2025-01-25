import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
})
export class PutAPIComponent {
  @Input() post: any;
  @Input() apiUrl: string = '';
  @Output() postUpdated = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  updatePost(id: string, title: string) {
    if (!title.trim()) return;

    const updatedPost = { title };
    this.http
      .put(`${this.apiUrl}/${id}`, updatedPost)
      .subscribe((response: any) => {
        this.postUpdated.emit(response);
      });
  }
}

