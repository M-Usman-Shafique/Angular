import { Component } from '@angular/core';
import { BadgeService } from '../services/badge.service';

@Component({
  selector: 'app-exclusive',
  imports: [],
  templateUrl: './exclusive.component.html',
})
export class ExclusiveComponent {
  isVisible: boolean = false;
  constructor(private badgeService: BadgeService) {}

  ngOnInit() {
    this.badgeService.getVisibilityObservable().subscribe((state) => {
      this.isVisible = state;
    });
  }
  goVisible() {
    this.badgeService.toggleVisibility();
  }
}
