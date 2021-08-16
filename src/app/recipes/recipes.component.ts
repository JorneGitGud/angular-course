import { Recipe } from './recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Output() selectedRecipe:Recipe;
  recipeWasSelected:boolean = false
  constructor() {
    this.selectedRecipe = new Recipe("","","")
   }

  ngOnInit(): void {
  }

  onEmitRecipe(recipe :Recipe){
   this.selectedRecipe = recipe;
   this.recipeWasSelected = true;
  }

}
