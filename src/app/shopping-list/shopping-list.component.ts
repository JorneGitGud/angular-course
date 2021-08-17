import { Ingredient } from './../Shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { ingredientsUpdate } from '../Shared/ingredientsUpdate.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Vannila', 20),
    new Ingredient('Dough', 1000),
  ];

  constructor() {}

  ngOnInit(): void {}

  onEmitButtonPressed(update: ingredientsUpdate) {
    switch (update.action) {
      case 'add':
        this.ingredients.push(update.ingredient);
        break;

      case 'delete':
        this.ingredients = this.ingredients.filter(item => item.name !== update.ingredient.name)
        break;

      default:
        break;
    }
  }
}
