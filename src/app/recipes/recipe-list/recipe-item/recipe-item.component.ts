import { Recipe } from '../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input allows us to bind this component property from outside
  @Input() recipe: Recipe;
  @Input() index: number;


  ngOnInit() {
  }


}
