import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { User } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedUser = new Subject<User>();
  private loggedUserData: User | any;

  updateUserData(user: User) {
    this.loggedUser.next(user);
  }

  getUserData(): Observable<User> {
    return this.loggedUser.asObservable();
  }

  updateLoggedUser(user: User) {
    this.loggedUserData = user;
  }

  getLoggedUser(): User {
    return this.loggedUserData;
  }
}
