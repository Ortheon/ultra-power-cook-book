import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs';
import {ShoppingListService} from './shopping-list.service';
import {HttpClient} from '@angular/common/http';
import {promise} from 'selenium-webdriver';
import map = promise.map;

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // mocked list of recipes, later recipes will be fetched from database
  // recipes: Recipe[] = [
  //   new Recipe('First recipe', 'This is the very first recipe!', 'https://asset.slimmingworld.co.uk/content/media/11596/jackfruit-chilli-iceland_sw_recipe.jpg', 4,
  //     [new Ingredient('Chicken', 4, 'pieces'), new Ingredient('Salt', 1, 'piece')]),
  //   new Recipe('Second recipe', 'This is the your second recipe!', 'https://asset.slimmingworld.co.uk/content/media/11595/chinese-chicken-curry-iceland_sw_recipe.jpg', 2,
  //     [new Ingredient('Chocolate', 200, 'gram')])
  // ];
  recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService, private httpClient: HttpClient) {}

  fetchRecipes() {
    this.httpClient.get('http://localhost:5000/api/recipes').subscribe((res: Recipe[]) => {
      console.log(res);
      this.recipes = res;
      this.recipesChanged.next(this.recipes.slice());
    });
  }

  getRecipes() {
      this.fetchRecipes();
      // TODO make it sorted by stars, then name!
    return this.recipes; // returns a copy of recipes array
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    // this.recipes[index] = updatedRecipe;
    // this.recipesChanged.next(this.recipes.slice());
    updatedRecipe.id = this.getSingleRecipe(index).id;
    this.httpClient.put('http://localhost:5000/api/recipes/', updatedRecipe).subscribe(
      data => {
        console.log('updated recipe with id ' + updatedRecipe.id + ' index number ' + index);
        this.recipesChanged.next(this.getRecipes().slice());
      }
    );
  }
  deleteRecipe(index: number) {
    this.httpClient.delete('http://localhost:5000/api/recipes/' + index).subscribe(
      () => {
        console.log('deleted recipes with id: ' + index);
        this.recipesChanged.next(this.getRecipes().slice());
      }
  );
  }

  addRecipe(recipe: Recipe) {
    this.httpClient.post('http://localhost:5000/api/recipes/', recipe).subscribe(data => {
      console.log('added new recipe!');
      this.recipesChanged.next(this.getRecipes().slice());
    });
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients.slice());
  }
}
