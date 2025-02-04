import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://localhost:3000/post';

  // http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { withCredentials: true }).pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return throwError(() => new Error('Failed to load posts.'));
      })
    );
  }

  // getUserPosts(userId: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  // }

  createPost(postData: { title: string; image: string }): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, postData, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.error('Error creating post:', error);
          return throwError(() => new Error('Failed to create post.'));
        })
      );
  }

  updatePost(
    id: number,
    post: { title: string; image: string }
  ): Observable<any> {
    return this.http
      .patch<any>(`${this.apiUrl}/${id}`, post, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.error('Error updating post:', error);
          return throwError(() => new Error(error));
        })
      );
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${+id}`, { withCredentials: true }).pipe(
      catchError((error) => {
        console.error('Error deleting post:', error);
        return throwError(() => new Error('Failed to delete post'));
      })
    );
  }
}
