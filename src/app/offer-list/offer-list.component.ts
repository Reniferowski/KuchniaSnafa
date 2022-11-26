import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferClass } from 'src/types/offer';
import { Router } from '@angular/router';
import { OfferDetailsService } from '../services/offer-details.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent implements OnInit {
  offers: OfferClass[] = [];
  actualLogedUser = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private details: OfferDetailsService,
    private userService: UserService
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
    this.actualLogedUser = this.userService?.getLoggedUser()?.id;
  }

  add() {
    window.alert('The offer has been added to basket!');
  }

  showDetails(offer: OfferClass) {
    this.details.setOffer(offer);
    this.router.navigate([offer.title.replaceAll(' ', '-')]);
  }
}
