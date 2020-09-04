import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'recipe001',
      title: 'Kotthu',
      imageUrl: 'https://www.theflavorbender.com/wp-content/uploads/2018/03/Chicken-Kottu-Roti-The-Flavor-Bender-Featured-Image-SQ-8.jpg',
      ingredients: ['Parata, Chicken, Gravy']
    },
    {
      id: 'recipe002',
      title: 'Fried Rice',
      imageUrl: 'https://valentinascorner.com/wp-content/uploads/2018/04/Easy-Chicken-Fried-Rice-10-of-11-500x500.jpg',
      ingredients: ['Basmathi, Chicken, Gravy']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
