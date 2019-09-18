import { Injectable } from '@angular/core';
import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private mockIngredients: Array<Ingredient> = [
    new Ingredient('Apples', 5, 'pieces'),
    new Ingredient('Tomatoes', 10, 'pieces'),
    new Ingredient('Meat', 10, 'pieces'),
    new Ingredient('Wine', 10, 'bottles'),
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  constructor() { }

  getIngredients() {
    return this.mockIngredients.slice();
  }
  getIngredient(index: number) {
    return this.mockIngredients[index];
  }


  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach(
    //   (ingredientToBeAdded) => {
    //     const ing = this.mockIngredients.find(
    //       x => x.name === ingredientToBeAdded.name
    //     );
    //     if (ing == null) {
    //       console.log('There\'s no duplicate ingredients!');
    //       this.mockIngredients.push(ingredientToBeAdded);
    //     } else {
    //       console.log('There are some duplicate ingredients, merging....');
    //       const index = this.mockIngredients.indexOf(ing);
    //       const amount = ingredientToBeAdded.amount;
    //       this.mockIngredients[index].amount +=  amount;
    //     }
    //   }
    //   );
    this.mockIngredients.push(...ingredients);
    this.ingredientsChanged.next(this.mockIngredients.slice());
  }
  addIngredient(ingredient: Ingredient) {
    this.mockIngredients.push(ingredient);
    this.ingredientsChanged.next(this.mockIngredients.slice());
  }
}
