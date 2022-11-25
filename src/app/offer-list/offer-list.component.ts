import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferClass } from 'src/types/offer';
import { Router } from '@angular/router';
import { OfferDetailsService } from '../services/offer-details.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent implements OnInit {
  offers: OfferClass[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private details: OfferDetailsService
  ) {}

  ngOnInit() {
    this.http.get<OfferClass[]>('http://localhost:3000/offers').subscribe(
      (data) => {
        this.offers = data;
      },
      (err) => {
        alert('Somethink went wrong');
      }
    );
  }

  add() {
    window.alert('The offer has been added to basket!');
  }

  essa(offer: OfferClass) {
    this.details.setOffer(offer);
    this.router.navigate([offer.title.replaceAll(' ', '-')]);
  }
}
