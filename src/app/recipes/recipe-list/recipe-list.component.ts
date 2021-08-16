import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() emitRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Vannila browney',
      'this is simply a test recipe',
      'https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/08/27152116/Triple-Vanilla-Brownies-OG-1-728x381.jpg'
    ),
    new Recipe(
      'Chocolate browney',
      'Add loads of chocolate',
      'https://handletheheat.com/wp-content/uploads/2019/09/Dark-Chocolate-Brownies-SQUARE-768x768.jpg'
    ),
  ];

  constructor() {}

  onEmitClickedItemComponent(recipe: Recipe) {
    this.emitRecipe.emit(recipe);
  }

  ngOnInit(): void {}
}
