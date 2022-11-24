import { Injectable } from '@angular/core';
import { User, UserClass } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _id: number = 0;
  _email: string = 'test';
  _city: string = '';
  _street: string = '';
  _houseNumber: number = 0;
  _zipCode: string = '';

  constructor() {}

  setLoggedUser(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.city = user.city;
    this.street = user.street;
    this.houseNumber = user.houseNumber;
    this.zipCode = user.zipCode;
  }

  getLoggedUser(): User {
    return {
      id: this.id,
      email: this.email,
      city: this.city,
      street: this.street,
      houseNumber: this.houseNumber,
      zipCode: this.zipCode
    }
  }

  set id(id: number) {
    this._id = id;
  }

  set email(email: string) {
    this._email = email;
  }

  set city(city: string) {
    this._city = city;
  }

  set street(street: string) {
    this._street = street;
  }

  set houseNumber(houseNumber: number) {
    this._houseNumber = houseNumber;
  }

  set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get city(): string {
    return this._city;
  }

  get street(): string {
    return this._street;
  }

  get houseNumber(): number {
    return this._houseNumber;
  }

  get zipCode(): string {
    return this._zipCode;
  }
}
