import { Ingredient } from './ingredients.model';
export class ingredientsUpdate {
  constructor(public action: string, public ingredient: Ingredient) {}
}
