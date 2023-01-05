import { Injectable } from '@angular/core';
import { Recipe } from 'src/types/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  _recipe!: Recipe;
  _inFavourites: boolean = false;

  constructor(private http: HttpClient,) { }

  addRecipe(recipe: Recipe){
    this._recipe = recipe;
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  setInFavourites(fav: boolean) {
    this._inFavourites = fav;
  }

  get inFavourites(): boolean{
    return this._inFavourites;
  }
}
