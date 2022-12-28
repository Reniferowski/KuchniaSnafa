import { Injectable } from '@angular/core';
import { Recipe } from 'src/types/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  _recipe!: Recipe;

  constructor(private http: HttpClient,) { }

  addRecipe(recipe: Recipe){
    this._recipe = recipe;
  }

  get recipe(): Recipe {
    return this._recipe;
  }

}
