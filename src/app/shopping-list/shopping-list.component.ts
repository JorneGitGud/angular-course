import { Component, OnInit } from '@angular/core';
import {Ingredient} from'../Shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients : Ingredient[] = [
  new Ingredient('Apples', 10),
  new Ingredient('Vannila', 20),
  new Ingredient('Dough', 1000)
];


  constructor() { }

  ngOnInit(): void {
  }

}
