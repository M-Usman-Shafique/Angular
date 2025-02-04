import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user';
  private currentUser: any = null;
  private user$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.user$.next(this.currentUser);
    }
  }

  getUser(): any {
    return this.currentUser;
  }

  getUserObservable() {
    return this.user$.asObservable();
  }

  setUser(user: any): void {
    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    this.currentUser = userData;
    localStorage.setItem('loginUser', JSON.stringify(userData));
    this.user$.next(userData);
  }

  clearUserData(): void {
    this.currentUser = null;
    localStorage.removeItem('loginUser');
    this.user$.next(null);
  }

  signup(user: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}`, user, { withCredentials: true })
      .pipe(
        catchError((error) => {
          console.error('Registration error:', error);
          throw new Error('Registration failed. Please try again.');
        })
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl}/login`,
        { email, password },
        { withCredentials: true }
      )
      .pipe(
        catchError((error) => {
          console.error('Login error:', error);
          throw new Error('An error occurred while trying to log in.');
        })
      );
  }

  logout(): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.clearUserData()),
        catchError((error) => {
          console.error('Logout error:', error);
          throw new Error('An error occurred while logging out.');
        })
      );
  }

  deleteUser(id: any): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${id}`, { withCredentials: true })
      .pipe(
        tap(() => this.clearUserData()),
        catchError((error) => {
          console.error('Delete user error:', error);
          throw new Error('An error occurred while deleting user.');
        })
      );
  }
}
