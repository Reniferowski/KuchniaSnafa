import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OfferListComponent } from './offer-list/offer-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { AddToShoppingCartComponent } from './add-to-shopping-cart/add-to-shopping-cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderComponent } from './order/order.component';
import { ButtonDisplayDirective } from './directives/button-display.directive';
import { SearchFilterPipe } from './search-filter.pipe';
import {NgToastModule} from "ng-angular-popup";
import { RecipeComponent } from './recipe/recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    TopBarComponent,
    OfferDetailsComponent,
    AddToShoppingCartComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    OrderComponent,
    ButtonDisplayDirective,
    SearchFilterPipe,
    RecipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgToastModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
