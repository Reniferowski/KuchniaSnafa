import { Component, OnInit, Input } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: OfferClass[] = [];

  // @Input()
  constructor() { }

  ngOnInit(): void {
  }

  addToShoppingCart(offer: OfferClass){
    console.log(offer);
    this.shoppingCart.push(offer);
  }

}
