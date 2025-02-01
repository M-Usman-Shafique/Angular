import { Component, computed } from '@angular/core';
import { NgIf } from '@angular/common';
import { BadgeService } from '../services/badge.service';

@Component({
  selector: 'app-badge',
  imports: [NgIf],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  isVisible = computed(() => this.badgeService.isVisible());
  constructor(private badgeService: BadgeService) {}
}
