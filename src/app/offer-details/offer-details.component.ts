import { Component, OnInit, Input } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer!: OfferClass;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.isClicked = !this.isClicked;
  }

}
