import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/types/user';
import { UserService } from '../services/user.service';
import { CustomValidators } from '../validators/postCodeValidator';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  public editForm!: FormGroup;
  public userToEdit: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      city: [''],
      street: ['', [Validators.required]],
      houseNumber: [0, [Validators.required]],
      postCode: ['', [CustomValidators.postCodeValidator]],
    });
    this.userToEdit = this.userService.getLoggedUser();
  }

  ngOnInit(): void {
    console.log(this.userToEdit);
    this.editForm.setValue({
      email: this.userToEdit?.email || '',
      password: this.userToEdit?.password || '',
      city: this.userToEdit?.city || '',
      street: this.userToEdit?.street || '',
      houseNumber: this.userToEdit?.houseNumber || '',
      postCode: this.userToEdit?.postCode || '',
    });
  }

  edit() {
    console.log('ee?');
    this.http
      .put<User>('http://localhost:3000/users/' + this.userToEdit.id, this.editForm.value)
      .subscribe();
  }
}
