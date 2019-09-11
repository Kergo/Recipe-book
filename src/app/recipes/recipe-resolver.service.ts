import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
// import { RecipeService } from './recipe.service';
import * as RecipeActions from '../recipes/store/recipe.actions';
import * as fromApp from '../store/app.reducer';
import { of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    // constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {}
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const recipes = this.recipeService.getRecipes();
        // if (recipes.length === 0) {
        //     return this.dataStorageService.fetchRecipes();
        // } else {
        //     return recipes;
        // }
        return this.store.select('recipes').pipe(
            take(1),
            map(recipesState => {
                return recipesState.recipes;
            }),
            switchMap(recipes => {
                if (recipes.length === 0) {
                    this.store.dispatch(new RecipeActions.FetchRecipes());
                    return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
                } else {
                    return of(recipes);
                }
            })
        );
    }
}
