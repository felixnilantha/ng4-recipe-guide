import { Ingredient } from '../global/Ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('egg', 12),
    new Ingredient('bacon', 2)

  ];

  constructor() { }

  ngOnInit() {
  }

}
