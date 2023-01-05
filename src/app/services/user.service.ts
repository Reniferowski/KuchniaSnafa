import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedUser = new Subject<User>();
  private loggedUserData: User | any;
  private isLogged: boolean = false;

  updateUserData(user: User) {
    this.loggedUser.next(user);
    this.isLogged = true;
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

  logOutUser(): void {
    this.loggedUserData = null;
    this.isLogged = false;
  }

  getIsLogged():boolean {
    return this.isLogged;
  }
}
