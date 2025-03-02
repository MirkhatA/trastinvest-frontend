import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  email = '';
  password = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
