import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/types/recipe';
import { RecipeService } from '../services/recipe.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/types/user';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  _recipe!: Recipe;
  userData!: User;

  constructor(
    private userService: UserService,
    private recipe: RecipeService,
    private router: Router,
    private http: HttpClient,
    private toast: NgToastService
    ,) { }

  ngOnInit(): void {
    this._recipe = this.recipe.recipe;
    this.userData = this.userService.getLoggedUser();
  }

  back() {
    this.router.navigate(['']);
  }

  saveRecipe() {
    this.userData.recipes?.push({id: this._recipe.id, title: this._recipe.title});

    this.http.put<User>('http://localhost:3000/users/' + this.userData.id, this.userData)
      .subscribe();
      console.log(this.userData)
      this.toast.info({
        summary: "Przepis dodano do ulubionych!",
        duration: 3500
      });
  }

  randomRecipe() {
    this.http.get<any>('https://api.spoonacular.com/recipes/random/?apiKey=d2dc1d4a1a4d4c8f8430075c14c8e152&number=1').subscribe(
      (data) => {
        this._recipe = {
          id: data["recipes"][0]["id"],
          title: data["recipes"][0]["title"],
          sourceURL: data["recipes"][0]["sourceUrl"],
          time: data["recipes"][0]["readyInMinutes"],
          instructions: data["recipes"][0]["instructions"],
          ingredients: data["recipes"][0]["extendedIngredients"].map((element: any) => element["original"]),
          photoURL: data["recipes"][0]["image"]
        }
        this.recipe.addRecipe(this._recipe);
      }
      )
  }

  isFavourite():boolean{
    return this.userData?.recipes?.some(recip => recip.id === this._recipe.id)
  }

}
