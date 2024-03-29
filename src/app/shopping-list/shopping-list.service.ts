import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, neewIngredient: Ingredient){
    console.log(neewIngredient)
    this.ingredients[index] = neewIngredient;
    console.log(this.ingredients)

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    console.log('deleting index: ' + index);
    // must add 1 here, to tell only to splice 1 item, otherwise the whole list would be empty
    this.ingredients.splice(index, 1);
    console.log(this.ingredients);

    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
}
