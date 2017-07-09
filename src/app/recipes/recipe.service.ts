import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {

 private _recipeSelected = new EventEmitter<Recipe>();

  // Recipe is the recipe class created in the recipe model
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'dummy data', 'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg'),
    new Recipe('Recipe 2', 'dummy data', 'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg')


  ];

  getRecipes() {
 // we only get a copy of the array
    return this.recipes.slice();
  }

  get recipeSelected () {
    return this._recipeSelected;
  }


}
