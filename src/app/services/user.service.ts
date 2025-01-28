import { Injectable } from '@angular/core';

interface User {
  id: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: User | null = null;

  constructor() {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    const storedUser = localStorage.getItem('loginUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  getUser(): any {
    return this.currentUser;
  }

  setUser(user: any): void {
    this.currentUser = user;
    localStorage.setItem('loginUser', JSON.stringify(user));
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('loginUser');
  }
}
