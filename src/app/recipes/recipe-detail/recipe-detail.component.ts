import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() {
    this.recipe = new Recipe("","","", [new Ingredient('',0)])
  }

  ngOnInit(): void {}


}
