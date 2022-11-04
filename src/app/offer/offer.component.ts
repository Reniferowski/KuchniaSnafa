import { Component, Input, OnInit } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'show-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input()
  offerForPrint!: OfferClass

  constructor() { }

  ngOnInit(): void {
  }

}
