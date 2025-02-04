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
      next: (foundUser) => {
        this.userService.setUser(foundUser);
        console.log('Login successful...');
        this.router.navigateByUrl('');
      },
      error: (error) => {
        console.error(error.message);
        alert('Login failed. Please try again!');
      },
    });
  }
}
