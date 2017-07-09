import { Ingredient } from '../global/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {


  private _recipeSelected = new EventEmitter<Recipe>();

  // Recipe is the recipe class created in the recipe model
  private recipes: Recipe[] = [
    new Recipe('Recipe 1',
      'dummy data',
      'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
      [new Ingredient('ing1', 25), new Ingredient('ing2', 40)]),
    new Recipe('Recipe 2', 'dummy data', 'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
      [new Ingredient('ing3', 25), new Ingredient('ing4', 40)])


  ];

   constructor (private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // we only get a copy of the array
    return this.recipes.slice();
  }

  get recipeSelected() {
    return this._recipeSelected;
  }

  addIngredientsToShoppingList(ingredients: Ingredient []) {
    this.shoppingListService.addIngredients(ingredients);
  }


}
