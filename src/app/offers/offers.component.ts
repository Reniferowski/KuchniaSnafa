import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: OfferClass[] = []

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

}
