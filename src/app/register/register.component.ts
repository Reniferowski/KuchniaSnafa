import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from '../validators/postCodeValidator';
import { User } from 'src/types/user';
import { NgToastService } from "ng-angular-popup";

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
    private router: Router,
    private toast: NgToastService
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
    this.http.post<User>('http://localhost:3000/users', this.registerForm.value)
      .subscribe(
        (res) => {
          this.toast.info({
            summary: "Udało się zarejestrować",
            duration: 5000
          });
          this.registerForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          this.toast.error({
            summary: JSON.stringify(err) + 'coś poszło nie tak',
            duration: 5000
          });
        }
      );
  }
}
