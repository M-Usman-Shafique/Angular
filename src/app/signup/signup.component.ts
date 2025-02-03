import { UserService } from '../services/user.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: any = {
    username: '',
    email: '',
    password: '',
  };

  userService = inject(UserService);
  router = inject(Router);

  onSignup() {
    this.userService.signup(this.user)
      .subscribe({
        next: (res) => {
          console.log('Registration successful!');
          this.userService.setUser(res);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Registration failed. Please try again.');
          console.error(err);
        },
      });
  }
}
