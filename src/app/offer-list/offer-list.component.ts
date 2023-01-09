import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferClass } from 'src/types/offer';
import { Router } from '@angular/router';
import { OfferDetailsService } from '../services/offer-details.service';
import { UserService } from '../services/user.service';
import { NgToastService } from "ng-angular-popup";
import { Recipe } from 'src/types/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent implements OnInit {
  offers: OfferClass[] = [];
  actualLogedUser = 0;
  searchText!: string;
  recipes: Recipe[] = [];
  recip!: Recipe;

  constructor(
    private http: HttpClient,
    private router: Router,
    private details: OfferDetailsService,
    private userService: UserService,
    private toast: NgToastService,
    private recipe: RecipeService,
  ) {}

  ngOnInit() {
    this.http.get<OfferClass[]>('http://localhost:3000/offers').subscribe(
      (data) => {
        this.offers = data;
      },
      (err) => {
        this.toast.error({
          summary: "Error",
          duration: 5000
        });
      }
    );
    this.actualLogedUser = this.userService?.getLoggedUser()?.id;
  }


  showDetails(offer: OfferClass) {
    this.details.setOffer(offer);
    this.router.navigate([offer.title.replaceAll(' ', '-')]);
  }

  randomRecipe() {
    this.http.get<any>('https://api.spoonacular.com/recipes/random/?apiKey=d2dc1d4a1a4d4c8f8430075c14c8e152&number=1').subscribe(
      (data) => {
        this.recip = {
          id: data["recipes"][0]["id"],
          title: data["recipes"][0]["title"],
          sourceURL: data["recipes"][0]["sourceUrl"],
          time: data["recipes"][0]["readyInMinutes"],
          instructions: data["recipes"][0]["instructions"],
          ingredients: data["recipes"][0]["extendedIngredients"].map((element: any) => element["original"]),
          photoURL: data["recipes"][0]["image"]
        }
        this.recipe.addRecipe(this.recip);
        this.recipe.setInFavourites(false);
        this.router.navigate(['recip']);
      }
      )
  }
}
