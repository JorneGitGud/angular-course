import { Ingredient } from 'src/app/Shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vannila browney',
      'this is simply a test recipe',
      'https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/08/27152116/Triple-Vanilla-Brownies-OG-1-728x381.jpg',
      [
        new Ingredient('Vannilla (g)', 1),
        new Ingredient('eggs', 100),
        new Ingredient('Dough (g)', 100)
      ]
      ),
    new Recipe(
      'Chocolate browney',
      'Add loads of chocolate',
      'https://handletheheat.com/wp-content/uploads/2019/09/Dark-Chocolate-Brownies-SQUARE-768x768.jpg',
      [
        new Ingredient('chocolate (g)', 400),
        new Ingredient('eggs', 100),
        new Ingredient('Dough (g)', 100)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
