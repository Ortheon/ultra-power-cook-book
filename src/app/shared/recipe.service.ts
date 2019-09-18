import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // mocked list of recipes, later recipes will be fetched from database
  recipes: Recipe[] = [
    new Recipe('First recipe', 'This is the very first recipe!', 'https://asset.slimmingworld.co.uk/content/media/11596/jackfruit-chilli-iceland_sw_recipe.jpg', 4,
      [new Ingredient('Chicken', 4, 'pieces'), new Ingredient('Salt', 1, 'piece')]),
    new Recipe('Second recipe', 'This is the your second recipe!', 'https://asset.slimmingworld.co.uk/content/media/11595/chinese-chicken-curry-iceland_sw_recipe.jpg', 2,
      [new Ingredient('Chocolate', 200, 'gram')])
  ];

  constructor(private shoppingListService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice(); // returns a copy of recipes array
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients.slice());
  }
}
