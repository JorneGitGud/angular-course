import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Vannila browney', 'this is simply a test recipe', 'https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/08/27152116/Triple-Vanilla-Brownies-OG-1-728x381.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
