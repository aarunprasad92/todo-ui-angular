import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';

  // Event handler method
  onLogin(): void {
    console.log('Login button clicked');
    console.log('Username:', this.userName);
    console.log('Password:', this.password);
  }
}
