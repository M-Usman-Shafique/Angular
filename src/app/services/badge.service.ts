import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  isVisible = signal<boolean>(false);

  constructor() {}

  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
}
