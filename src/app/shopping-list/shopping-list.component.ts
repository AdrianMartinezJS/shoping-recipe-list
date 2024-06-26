import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5,
    },
    {
      name: 'Oranges',
      amount: 10,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
