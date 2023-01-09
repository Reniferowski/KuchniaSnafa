import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferClass } from 'src/types/offer';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/types/order';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  shoppingCart: OfferClass[] = [];
  promoCodeUsed: boolean = false;
  promo: string = '';

  constructor(
    public shoppingCartService: ShoppingCartService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient, private toast: NgToastService) {
  }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.products;
}

  checkPromoCode() {
    this.http.get<string[]>('http://localhost:3000/codes').subscribe(
      (res) => {
        const code = res.find(value => value === this.promo)
        if (code && !this.promoCodeUsed){
          this.shoppingCartService.updateTotalValue();
          this.promoCodeUsed = true;
        }
        else if(this.promoCodeUsed) {
          this.toast.info({
            summary: "Kod został już użyty!",
            duration: 5000
          });
        }
        else {
          this.toast.error({
            summary: "Nieprawidłowy kod",
            duration: 5000
          });
        }
   }
  )}

   order() {
    this.http
    .post<Order>('http://localhost:3000/orders', {user_id: this.userService.getLoggedUser().id, ordersList: this.shoppingCart})
    .subscribe(
      (res) => {
        this.toast.info({
          summary: "Dodano zamówienie",
          duration: 5000
        });
        this.shoppingCartService.clearCart();
        this.router.navigate(['']);
      },
      (err) => {
        this.toast.error({
          summary: JSON.stringify(err) + ' coś poszło nie tak',
          duration: 5000
        });
      }
    );
   }

   deleteElement(product: OfferClass) {
    const confirmAction = confirm("Czy na pewno chcesz usunąć dietę z zamówienia?");

    if(confirmAction) {
    this.shoppingCartService.deleteProduct(product);
    }
  }
}
