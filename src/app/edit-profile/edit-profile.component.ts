import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/types/user';
import { UserService } from '../services/user.service';
import { CustomValidators } from '../validators/postCodeValidator';
import { NgToastService } from "ng-angular-popup";
import { RecipeService } from '../services/recipe.service';
import { Recipe } from 'src/types/recipe';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  public editForm!: FormGroup;
  public userToEdit: User;
  _recipe!: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
    private recipe: RecipeService,
  ) {
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      city: [''],
      street: ['', [Validators.required]],
      houseNumber: [0, [Validators.required]],
      postCode: ['', [CustomValidators.postCodeValidator]],
      recipes:[[]]
    });
    this.userToEdit = this.userService.getLoggedUser();
  }

  ngOnInit(): void {
    this.editForm.setValue({
      email: this.userToEdit?.email || '',
      password: this.userToEdit?.password || '',
      city: this.userToEdit?.city || '',
      street: this.userToEdit?.street || '',
      houseNumber: this.userToEdit?.houseNumber || '',
      postCode: this.userToEdit?.postCode || '',
      recipes: this.userToEdit?.recipes || []
    });
  }

  edit() {
    this.http
      .put<User>('http://localhost:3000/users/' + this.userToEdit.id, this.editForm.value)
      .subscribe();
      this.toast.info({
        summary: "Dane zostały zaktualizowane!",
        duration: 3500
      });
      this.userService.updateUserData(this.editForm.value);
    }

  delete() {
    this.http.delete('http://localhost:3000/users/' + this.userToEdit.id)
        .subscribe();
    this.toast.info({
      summary: "Pomyślnie usunięto konto!",
      duration: 3500
    });
    this.router.navigate(['login']);
  }

  showRecipe(recipeId: number){
    this.http.get<any>('https://api.spoonacular.com/recipes/' + recipeId + "/information?apiKey=d2dc1d4a1a4d4c8f8430075c14c8e152").subscribe(
      (data) => {
        this._recipe = {
          id: data["id"],
          title: data["title"],
          sourceURL: data["sourceUrl"],
          time: data["readyInMinutes"],
          instructions: data["instructions"],
          ingredients: data["extendedIngredients"].map((element: any) => element["original"]),
          photoURL: data["image"]
        }
        this.recipe.addRecipe(this._recipe);
        this.recipe.setInFavourites(true);
        this.router.navigate(['recip']);
      }
      )
  }

  deleteRecipe(recipeId: number, recipeTitle: string ) {
    const confirmAction = confirm("Czy na pewno chcesz usunąć przepis z ulubionych?");
    if(confirmAction){
      const elementId = this.userToEdit.recipes?.indexOf({id: recipeId, title: recipeTitle});
      this.userToEdit.recipes?.splice(elementId, 1)

      this.http.put<User>('http://localhost:3000/users/' + this.userToEdit.id, this.userToEdit)
      .subscribe();
      this.toast.info({
        summary: "Przepis usunięto z ulubionych!",
        duration: 3500
      });
      this.userService.updateUserData(this.userToEdit);
    }
  }

  logOut() {
    this.userService.logOutUser()
    this.router.navigate([''])
  }
}
