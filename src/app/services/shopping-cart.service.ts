import { Injectable } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  _products: OfferClass[] = [];

  constructor() {}

  addToCart(product: OfferClass) {
    this._products.push(product);
  }

  get products(): OfferClass[] {
    return this._products;
  }

  deleteProduct(product: OfferClass) {
    this._products.splice(this._products.indexOf(product), 1);
  }

  clearCart() {
    return (this._products = []);
  }
}
