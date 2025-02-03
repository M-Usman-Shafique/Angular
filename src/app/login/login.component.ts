import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = { email: '', password: '' };

  userService = inject(UserService);
  router = inject(Router);
  onLogin() {
    this.userService.login(this.user.email, this.user.password).subscribe({
      next: (users) => {
        const foundUser = users.find(
          (u: any) =>
            u.email === this.user.email && u.password === this.user.password
        );

        if (foundUser) {
          console.log('Login successful...');
          this.userService.setUser(foundUser);
          this.router.navigateByUrl('');
        } else {
          alert('Invalid email or password.');
        }
      },
      error: (error) => {
        alert('An error occurred while trying to log in. Please try again.');
        console.error(error);
      },
    });
  }
}
