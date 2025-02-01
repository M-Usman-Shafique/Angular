import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { BadgeService } from '../services/badge.service';

@Component({
  selector: 'app-badge',
  imports: [NgIf],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  isVisible: boolean = false;
  constructor(private badgeService: BadgeService) {}

  ngOnInit() {
    this.badgeService.getVisibilityObservable().subscribe((state) => {
      this.isVisible = state;
    });
  }
}
