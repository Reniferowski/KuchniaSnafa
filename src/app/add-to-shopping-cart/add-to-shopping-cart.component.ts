import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferClass } from 'src/types/offer';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'add-to-shopping-cart',
  templateUrl: './add-to-shopping-cart.component.html',
  styleUrls: ['./add-to-shopping-cart.component.css'],
})
export class AddToShoppingCartComponent implements OnInit {
  @Input() offer!: OfferClass;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.shoppingCartService.addToCart(this.offer);
  }
}
