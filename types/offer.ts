export type Offer = {
   title: string,
   description: string,
   price: number,
   calories: string
}

export class OfferClass {

  get title(): string {
    return this.title;
  }

  set title(title:string) {
    this.title = title;
  }

  get description(): string {
    return this.description;
  }

  set description(description:string) {
    this.description = description;
  }

  get price(): number {
    return this.price;
  }

  set price(price:number) {
    this.price = price;
  }

  get calories(): string {
    return this.calories;
  }

  set calories(calories:string) {
    this.calories = calories
  }
}
