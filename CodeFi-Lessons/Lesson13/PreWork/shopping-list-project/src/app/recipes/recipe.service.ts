import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { ThisReceiver } from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

 private recipes:Recipe[] = [
    new Recipe('Beans and Franks', 'Delicious southern cooking with a budget',
    'https://menus-makelleyandcompa.netdna-ssl.com/wp-content/uploads/2019/02/beans-and-franks-insta-min.jpg',
    [
      new Ingredient('Can Baked Beans', 2),
      new Ingredient('Package of Hotdogs', 1)
    ]),
    new Recipe('Mac and Cheese', 'Delicious southern cooking for kids',
    'https://www.seriouseats.com/thmb/qzfKv8Tm86wx90W0HLskO52W-Lg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg',
    [
      new Ingredient('16 oz. Pasta', 1),
      new Ingredient('16 oz Velvetta Block', 1),
      new Ingredient('Cup of Milk', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice(); //return new array that is copy of 'recipes'
  }
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
