import { Component, OnInit } from '@angular/core';
import { User } from 'src/types/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isLogged: boolean = false;
  public userName: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService)
    // if (this.userService.id != 0) {
      this.isLogged = true;
      this.userName = this.userService.email;
    // }
  }

}
