import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { User } from 'src/types/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userSubscription: Subscription;
  public isLogged: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.userSubscription = this.userService.getUserData().subscribe((user) => {
      this.userService.updateLoggedUser(user);
      this.isLogged = true;
    });
  }

  ngOnInit(): void {}

  editProfile() {
    this.router.navigate(this.isLogged ? ['/profile'] : ['/login']);
  }
}
