import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  // Event handler method
  onLogin(): void {
    const validUsername = 'admin';
    const validPassword = '123';

    if (this.userName === validUsername && this.password === validPassword) {
      this.errorMessage = '';
      console.log('Login successful');
      // Navigate to the welcome page
      this.router.navigate(['/welcome', this.userName]);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}