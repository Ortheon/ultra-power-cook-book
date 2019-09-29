import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../shared/recipe.service';
import {Recipe} from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (parameters) => {
        this.id = parameters['id'];
        this.editMode = parameters['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDescription = '';
  let recipeStars = 0;
  let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.recipe = this.recipeService.getSingleRecipe(this.id);
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeStars = this.recipe.stars;
      recipeDescription = this.recipe.description;

      if (this.recipe['ingredients']) {
        for (const ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              id: new FormControl(ingredient.id),
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
              amountUnit: new FormControl(ingredient.amountUnit, Validators.required),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      stars: new FormControl(recipeStars, [
        Validators.required,
        Validators.pattern(/^[1-5]/)
      ]),
      ingredients: recipeIngredients
    });
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        amountUnit: new FormControl(null, Validators.required),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onSubmit() {
    if (this.editMode) {
      console.log('recipe form value: ');
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
}
