import {Ingredient} from './ingredient.model';

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public stars: number;
  public ingredients: Ingredient[];

  constructor(id: number, name: string, description: string, imagePath: string, stars: number, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.stars = stars;
    this.ingredients = ingredients;
  }
}
