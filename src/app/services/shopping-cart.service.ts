import { Injectable } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  _products: OfferClass[] = [];
  _totalValue: number = 0;
  _discounted: boolean = false;

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

  updateTotalValue() {
    this._totalValue *= 0.8;
    this._discounted = true;
  }

  deleteProduct(product: OfferClass) {
    if(this._discounted) {
    this._totalValue -= product.price * 0.8;
    }
    else {
      this._totalValue -= product.price;
    }
    this._products.splice(this._products.indexOf(product), 1);
  }

  clearCart() {
    return (this._products = []);
  }
}
