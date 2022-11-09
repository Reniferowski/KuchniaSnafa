import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferClass } from 'src/types/offer';
import { calcPrice } from 'src/functions/basket';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: OfferClass[] = [];
  tempBasket: OfferClass[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<OfferClass[]>('http://localhost:3000/offers').subscribe(data => {
    this.offers = data;
    }, err => {
      alert("Somethink went wrong")
    })
}

  updateCart(product: OfferClass  ) {
    this.tempBasket.push(product);
    console.log(this.tempBasket);
  }
}
