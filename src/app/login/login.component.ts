import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = {
    email: '',
    password: '',
  };

  router = inject(Router);
  http = inject(HttpClient);

  private apiUrl = 'https://67948e5baad755a134e9c6fe.mockapi.io/api/users';

  onLogin() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (users) => {
        const foundUser = users.find(
          (u) =>
            u.email === this.user.email && u.password === this.user.password
        );

        if (foundUser) {
          console.log('Login successful...');
          localStorage.setItem('loginUser', JSON.stringify(foundUser));
          this.router.navigateByUrl('');
        } else {
          alert('Invalid email or password.');
        }
      },
      (error) => {
        alert('An error occurred while trying to log in. Please try again.');
        console.error(error);
      }
    );
  }
}
