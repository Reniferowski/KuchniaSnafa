export class OfferClass {
  private _id: number;
  private _title: string;
  private _description: string;
  private _price: number;
  private _calories: string;
  private _photoUrl: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    calories: string,
    photoUrl: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._price = price;
    this._calories = calories;
    this._photoUrl = photoUrl;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get calories(): string {
    return this._calories;
  }

  set calories(calories: string) {
    this._calories = calories;
  }

  get photoUrl(): string {
    return this._photoUrl;
  }

  set photoUrl(photoUrl: string) {
    this._photoUrl = photoUrl;
  }
}
