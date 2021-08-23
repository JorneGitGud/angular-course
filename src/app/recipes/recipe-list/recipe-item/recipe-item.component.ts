import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe ;

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe("","","",[new Ingredient('',0)])
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
