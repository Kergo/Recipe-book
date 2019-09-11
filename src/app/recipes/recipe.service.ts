// import { Injectable, EventEmitter } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Subject } from 'rxjs';

// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
// import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
// import * as fromApp from '../store/app.reducer';


// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  // recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'Simply a test', 'https://www.yellowblissroad.com/wp-content/uploadblablabal',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('French Fries', 20)
  //   ]),
  //   new Recipe('A test recipe2', 'Simply a testtche', 'https://i.pinimg.com/736x/8f/37/9b/8f379bd6b4b79787b77135bc691f15cb.jpg',
  //   [
  //     new Ingredient('Buns', 2),
  //     new Ingredient('Meat', 1)
  //   ])
  // ];

  // private recipes: Recipe[] = [];

  // constructor(private slService: ShoppingListService,
  //             private store: Store<fromApp.AppState>) { }

  // setRecipes(recipes: Recipe[]) {
  //   this.recipes = recipes;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // getRecipes() {
  //   return this.recipes.slice();
  // }

  // getRecipe(index: number) {
  //   return this.recipes[index];
  // }

  // addIngredientsToSL(ingredients: Ingredient[]) {
  //   // this.slService.addIngredients(ingredients);
  //   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  // }

  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // updateRecipe(index: number, newRecipe: Recipe) {
  //   this.recipes[index] = newRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
}
