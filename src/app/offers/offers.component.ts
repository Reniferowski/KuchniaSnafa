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

  offers: OfferClass[] = []
  basket: OfferClass[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<OfferClass[]>('http://localhost:3000/offers').subscribe(data => {
    this.offers = data;
    // console.log(data)
    }, err => {
      alert("Somethink went wrong")
    })
}

  addOffer(std: OfferClass){
    this.basket.push(new OfferClass(std.id, std.title, std.description, std.price, std.calories));
    console.log(calcPrice(this.basket));
  }

}
