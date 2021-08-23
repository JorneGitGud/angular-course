import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Vannila', 20),
    new Ingredient('Dough', 1000),
  ];


  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  removeIngredient(ingredient:Ingredient){
    this.ingredients = this.ingredients.filter(item => item.name !== ingredient.name)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredientsList(){
    return this.ingredients.slice();
  }
}
