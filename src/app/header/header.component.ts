import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() emitShowRecipes = new EventEmitter<boolean>();
  @Output() emitShowShoppingList = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  showRecipes() {
    this.emitShowRecipes.emit(true);
  }
  showShoppingList() {
    this.emitShowShoppingList.emit(true);
  }
}
