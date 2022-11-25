import { Injectable } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Injectable({
  providedIn: 'root',
})
export class OfferDetailsService {
  private _offer: OfferClass | any;

  constructor() {}

  getOffer(): OfferClass {
    return this._offer;
  }

  setOffer(offer: OfferClass) {
    this._offer = offer;
  }
}
