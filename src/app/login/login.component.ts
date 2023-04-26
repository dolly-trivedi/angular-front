import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  checkLogin() {
    this.http
      .post('http://127.0.0.1:8000/api/login', this.loginForm.value)
      .subscribe((response: any) => {
        if (response.status === 200) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['']);
        }
      });
  }
}
