import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) {
    this.userSubscription = this.userService.getUserData().subscribe((user) => {
      this.userService.updateLoggedUser(user);
    });
  }

  ngOnInit(): void {}

  editProfile() {
    this.router.navigate(this.userService.getIsLogged() ? ['/profile'] : ['/login']);
  }
}
