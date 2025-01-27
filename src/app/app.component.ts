import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  username = '';
  
  handleChange(val: string) {
    this.username = val;
  }

  setValue() {
    this.username = 'John';
  }
}
