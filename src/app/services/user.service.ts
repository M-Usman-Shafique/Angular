import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: any = null;
  private userSubject = new BehaviorSubject<any>(null);

  constructor() {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.userSubject.next(this.currentUser);
    }
  }

  getUser(): any {
    return this.currentUser;
  }

  getUserObservable() {
    return this.userSubject.asObservable();
  }

  setUser(user: any): void {
    this.currentUser = user;
    localStorage.setItem('loginUser', JSON.stringify(user));
    this.userSubject.next(user);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('loginUser');
    this.userSubject.next(null);
  }
}
