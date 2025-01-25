import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-api',
  imports: [],
  templateUrl: './delete-api.component.html',
})
export class DeleteAPIComponent {
  @Input() post: any;
  @Input() apiUrl: string = '';
  @Output() postDeleted = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  deletePost(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.postDeleted.emit(id);
    });
  }
}
