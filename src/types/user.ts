export type User = {
  id: number;
  email: string;
  password?: string;
  city: string;
  street: string;
  houseNumber: number;
  zipCode: string;
}


export class UserClass {
  private _id: number;
  private _email: string;
  private _password?: string;
  private _city: string;
  private _street: string;
  private _houseNumber: number;
  private _zipCode: string;

  constructor(
    id: number,
    email: string,
    password: string,
    city: string,
    street: string,
    hoseNumber: number,
    zipCode: string
  ) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._city = city;
    this._street = street;
    this._houseNumber = hoseNumber;
    this._zipCode = zipCode;
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
