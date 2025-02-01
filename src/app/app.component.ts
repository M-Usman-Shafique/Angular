import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { NgIf } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, BadgeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserObservable().subscribe((user) => {
      this.user = user;
    });
  }
}
