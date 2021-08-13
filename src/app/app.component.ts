import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  shouldShowRecipes: boolean = true;
  shouldShowShoppingList: boolean = false;

  onEmitShowRecipes(vallue: boolean) {
    this.shouldShowRecipes = vallue;
    this.shouldShowShoppingList = !vallue;
  }
  onEmitShowShoppingList(vallue: boolean) {
    this.shouldShowShoppingList = vallue;
    this.shouldShowRecipes = !vallue;
  }
}
