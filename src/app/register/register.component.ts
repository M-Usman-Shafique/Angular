import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  http = inject(HttpClient);
  router = inject(Router);

  onRegister() {
    this.http
      .post('https://67948e5baad755a134e9c6fe.mockapi.io/api/users', this.user)
      .subscribe({
        next: (res) => {
          console.log('Registration successful!');
          localStorage.setItem('loginUser', JSON.stringify(res));
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Registration failed. Please try again.');
          console.error(err);
        },
      });
  }
}
