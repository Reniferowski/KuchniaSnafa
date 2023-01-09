import { Injectable } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  _products: OfferClass[] = [];
  _totalValue: number = 0;

  constructor() {}

  addToCart(product: OfferClass) {
    this._products.push(product);
    this._totalValue += product.price;
  }

  get products(): OfferClass[] {
    return this._products;
  }

  get totalValue(): number {
    return this._totalValue;
  }

  deleteProduct(product: OfferClass) {
    this._totalValue -= product.price;
    this._products.splice(this._products.indexOf(product), 1);
  }

  clearCart() {
    return (this._products = []);
  }
}
