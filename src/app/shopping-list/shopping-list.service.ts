import { Ingredient } from '../global/Ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

  private _ingredientListner = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('egg', 12),
    new Ingredient('bacon', 2)

  ];

  getIngredient() {
    // this will return a copy of the array.
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this._ingredientListner.emit(this.ingredients.slice());
  }

  get ingredientListner() {
    return this._ingredientListner;
  }

  addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this._ingredientListner.emit(this.ingredients.slice());
  }

}
