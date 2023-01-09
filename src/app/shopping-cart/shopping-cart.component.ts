import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferClass } from 'src/types/offer';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: OfferClass[] = [];
  isShow: boolean = false;

  constructor(
    public shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  showCart() {
    this.isShow = !this.isShow;
  }

  setOrder() {
    this.isShow = !this.isShow;
    this.router.navigate(['order']);
  }
}
