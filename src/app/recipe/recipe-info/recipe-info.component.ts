import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {RecipeService} from '../../shared/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.recipe = this.recipeService.getSingleRecipe(this.id);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients.slice());
  }

  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
  }
}
