import { Component, computed } from '@angular/core';
import { BadgeService } from '../services/badge.service';

@Component({
  selector: 'app-exclusive',
  imports: [],
  templateUrl: './exclusive.component.html',
})
export class ExclusiveComponent {
  isVisible = computed(() => this.badgeService.isVisible());
  constructor(private badgeService: BadgeService) {}
  goVisible() {
    this.badgeService.toggleVisibility();
  }
}
