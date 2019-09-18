import {Ingredient} from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public stars: number;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, stars: number, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.stars = stars;
    this.ingredients = ingredients;
  }
}
