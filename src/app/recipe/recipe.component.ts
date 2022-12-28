import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/types/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  _recipe!: Recipe;

  constructor(private recipe: RecipeService) { }

  ngOnInit(): void {
    this._recipe = this.recipe.recipe;
  }

}
