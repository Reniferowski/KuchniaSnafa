import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';

import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OffersComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
