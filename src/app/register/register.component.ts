import { UserService } from './../services/user.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: any = {
    username: '',
    email: '',
    password: '',
  };

  userService = inject(UserService);
  router = inject(Router);

  onRegister() {
    this.userService.register(this.user)
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
