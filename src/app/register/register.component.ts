import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  register(){
    this.http.post<any>("http://localhost:3000/users", this.registerForm.value)
    .subscribe(res=>{
      alert("Udało się zarejestrować");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("coś poszło nie tak")
    })
  }
}
