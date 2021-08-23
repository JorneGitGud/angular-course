import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() emitButtonPressed = new EventEmitter<any>();

  constructor(private shoppingListService : ShoppingListService) {
    this.nameInputRef = new ElementRef('');
    this.amountInputRef = new ElementRef(0);
  }

  ngOnInit(): void {}

  onClick(action: string) {
    const ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value.charAt(0).toUpperCase() +
        this.nameInputRef.nativeElement.value.slice(1),
      this.amountInputRef.nativeElement.value
    );
      if(action==='add'){
        this.shoppingListService.addIngredient(ingredient);
      }
      else if(action==='delete'){
        this.shoppingListService.removeIngredient(ingredient)
      }
  }
}
