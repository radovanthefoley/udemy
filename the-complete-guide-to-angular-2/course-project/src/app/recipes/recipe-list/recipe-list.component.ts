import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'A tasty test',
      description: 'This is a tasty test',
      imagePath: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg'
    },
    {
      name: 'A tasty test 2',
      description: 'This is a tasty test 2',
      imagePath: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg'
    },
    {
      name: 'A tasty test 3',
      description: 'This is a tasty test 3',
      imagePath: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Recipe-Soup-Noodle-Curried-Spicy-Chicken-Khaosoi-2344152.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
