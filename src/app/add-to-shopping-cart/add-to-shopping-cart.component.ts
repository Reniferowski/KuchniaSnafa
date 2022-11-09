import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'add-to-shopping-cart',
  templateUrl: './add-to-shopping-cart.component.html',
  styleUrls: ['./add-to-shopping-cart.component.css']
})
export class AddToShoppingCartComponent implements OnInit {

  offerToAdd: OfferClass = new OfferClass(0, '', '', 0, '')

  @Output() offerToBasket: EventEmitter<OfferClass> = new EventEmitter();

  @Input() actualOffer!: OfferClass; // offer given from parent

  constructor() {
  }

  ngOnInit(): void {
  }

  clickOnAddButton(): void { //if student was clicked then copy his data to a form
    this.offerToAdd.id = this.actualOffer.id;
    this.offerToAdd.title = this.actualOffer.title;
    this.offerToAdd.description = this.actualOffer.description;
    this.offerToAdd.calories = this.actualOffer.calories;
    this.offerToAdd.price = this.actualOffer.price;
    this.offerToBasket.emit(this.offerToAdd);
    // this.clickedOn = which;  //and change clickedon attribute to display edit form
  }

}
