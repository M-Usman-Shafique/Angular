import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: any = null;
  private user$ = new BehaviorSubject<any>(null);
  constructor() {
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
}
