import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from '../validators/postCodeValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      houseNumber: [0, [Validators.required]],
      postCode: ['', [CustomValidators.postCodeValidator]],
    });
  }
  ngOnInit(): void {

  }

  register() {
    this.http
      .post<any>('http://localhost:3000/users', this.registerForm.value)
      .subscribe(
        (res) => {
          alert('Udało się zarejestrować');
          this.registerForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert(JSON.stringify(err) + 'coś poszło nie tak');
        }
      );
  }
}
