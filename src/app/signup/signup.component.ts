import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
    });
  }
  checkSignup() {
    this.http
      .post('http://127.0.0.1:8000/api/signup', this.signupForm.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
