import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { User } from 'src/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: User) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Udało się zalogować');
          this.userService.updateUserData(user);
          this.loginForm.reset();
          this.router.navigate(['']);
        } else {
          alert('nie ma użytkownika o takiej kombinacji nazwy i hasła');
        }
      },
      (err) => {
        alert('coś poszło nie tak');
      }
    );
  }
}
