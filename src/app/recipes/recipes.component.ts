import { Ingredient } from 'src/app/Shared/ingredients.model';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  @Output() selectedRecipe:Recipe;

  constructor(private recipeService : RecipeService) {
    this.selectedRecipe = new Recipe("","","",[new Ingredient('',0)])
   }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
  }
}
