import { Ingredient } from '../../global/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputref: ElementRef;
  @ViewChild('amountInput') amountInputref: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {;
  }

  onAddItem() {

    const ingredientName = this.nameInputref.nativeElement.value;
    const ingredientAmout = this.amountInputref.nativeElement.value;

    const ingredient = new  Ingredient(ingredientName, ingredientAmout);
    this.shoppingListService.addIngredient(ingredient);

  }

}
