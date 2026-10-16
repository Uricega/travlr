import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(): void {
    this.errorMessage = '';

    this.http.post<{ token: string }>(
      'http://localhost:3000/api/login',
      {
        email: this.email,
        password: this.password
      }
    ).subscribe({
      next: (response) => {
        localStorage.setItem('travlr-token', response.token);
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}