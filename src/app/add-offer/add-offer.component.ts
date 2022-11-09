import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerToAdd: OfferClass = new OfferClass(0, '', '', 0, '')
  @Output() addInParentArray: EventEmitter<OfferClass> = new EventEmitter();

  @Input() actuallOffer!: OfferClass; // offer given from parent
  offerIndex!: number;

  constructor() { }

  ngOnInit(): void {
  }

  clickOnAddButton(): void { //if student was clicked then copy his data to a form
    this.offerToAdd.id = this.actuallOffer.id;
    this.offerToAdd.title = this.actuallOffer.title;
    this.offerToAdd.description = this.actuallOffer.description;
    this.offerToAdd.calories = this.actuallOffer.calories;
    this.offerToAdd.price = this.actuallOffer.price;
    // this.clickedOn = which;  //and change clickedon attribute to display edit form
  }

}
