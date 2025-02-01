import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private isVisible$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getVisibilityObservable() {
    return this.isVisible$.asObservable();
  }

  toggleVisibility() {
    this.isVisible$.next(!this.isVisible$.value);
  }
}
