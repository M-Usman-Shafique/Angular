import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/posts';

  // http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserPosts(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  createPost(postData: {
    userId: string;
    title: string;
    image: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
  updatePost(
    id: string,
    post: { title: string; image: string }
  ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
