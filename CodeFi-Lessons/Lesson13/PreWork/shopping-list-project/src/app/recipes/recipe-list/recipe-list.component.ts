import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Beans and Franks', 'Delicious southern cooking with a budget', 'https://menus-makelleyandcompa.netdna-ssl.com/wp-content/uploads/2019/02/beans-and-franks-insta-min.jpg'),
    new Recipe('Beans and Franks', 'Delicious southern cooking with a budget', 'https://menus-makelleyandcompa.netdna-ssl.com/wp-content/uploads/2019/02/beans-and-franks-insta-min.jpg')
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
