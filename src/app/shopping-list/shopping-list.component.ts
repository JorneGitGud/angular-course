import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from 'src/app/Shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  ];

  constructor(private shoppingListService : ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients
    })
  }
}
