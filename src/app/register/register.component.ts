import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { postCodeValidator } from '../validators/postCodeValidator';

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
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        houseNumber: new FormControl(0),
        postCode: new FormControl('', [postCodeValidator]),
    }),
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
          alert('coś poszło nie tak');
        }
      );
  }
}
