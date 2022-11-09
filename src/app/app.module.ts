import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';

import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from './offer/offer.component';
import { AddToShoppingCartComponent } from './add-to-shopping-cart/add-to-shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OffersComponent,
    OfferComponent,
    AddToShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
