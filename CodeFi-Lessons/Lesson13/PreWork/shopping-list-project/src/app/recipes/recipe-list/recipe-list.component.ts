import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { throwError } from 'rxjs';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Beans and Franks', 'Delicious southern cooking with a budget', 'https://menus-makelleyandcompa.netdna-ssl.com/wp-content/uploads/2019/02/beans-and-franks-insta-min.jpg'),
    new Recipe('Mac and Cheese', 'Delicious southern cooking for kids', 'https://www.seriouseats.com/thmb/qzfKv8Tm86wx90W0HLskO52W-Lg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210214-stovetop-mac-cheese-reshoot-vicky-wasik-9-0760b642ca704cf8b2c5121a363a60a2.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
