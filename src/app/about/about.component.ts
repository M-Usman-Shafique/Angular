import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  router = inject(Router);
  gotoContact() {
    this.router.navigateByUrl('contact');
  }
}
