import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  // Event handler method
  onLogin(): void {
    const validUsername = 'admin';
    const validPassword = '123';

    if (this.userName === validUsername && this.password === validPassword) {
      this.errorMessage = '';
      console.log('Login successful');
      // Add your login logic here
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
