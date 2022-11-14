import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OfferClass } from 'src/types/offer';

@Component({
  selector: 'add-to-shopping-cart',
  templateUrl: './add-to-shopping-cart.component.html',
  styleUrls: ['./add-to-shopping-cart.component.css']
})
export class AddToShoppingCartComponent implements OnInit {
  @Input() offer!: OfferClass;
  @Output() offerToShoppingCart: EventEmitter<OfferClass> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    this.offerToShoppingCart.emit(this.offer)
    console.log(this.offerToShoppingCart.observers)
  }
}
