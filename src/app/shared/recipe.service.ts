import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe("First recipe", "This is the very first recipe!", 'https://asset.slimmingworld.co.uk/content/media/11596/jackfruit-chilli-iceland_sw_recipe.jpg', 4,
      [new Ingredient("Chicken", 4, "pieces"), new Ingredient("Salt", 1, "piece")]),
    new Recipe("Second recipe", "This is the your second recipe!", 'https://asset.slimmingworld.co.uk/content/media/11595/chinese-chicken-curry-iceland_sw_recipe.jpg', 2,
      [new Ingredient("Chocolate", 200, "gram")])
  ];

  getRecipes() {
    return this.recipes.slice(); // returns a copy of recipes array
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }
}
