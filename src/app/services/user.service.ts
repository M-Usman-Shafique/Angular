import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/users';
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
    this.currentUser = user;
    localStorage.setItem('loginUser', JSON.stringify(user));
    this.user$.next(user);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('loginUser');
    this.user$.next(null);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        const foundUser = users.find((u) => u.email === email && u.password === password);
        if (!foundUser) {
          throw new Error('Invalid email or password.');
        }
        return foundUser;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        throw new Error('An error occurred while trying to log in.');
      })
    );
  }
  
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
      catchError((error) => {
        console.error('Registration error:', error);
        throw new Error('Registration failed. Please try again.');
      })
    );
  }
}
