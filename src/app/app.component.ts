import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzaApp';
  menu: MenuItem[] = [
    {
      name: "Dill Pickle Pizza",
      category: "Pizza",
      price: 12.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Rainbow Road",
      category: "Pizza",
      price: 10.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Charleston Chicken",
      category: "Pizza",
      price: 15.99,
      vegetarian: false,
      soldOut: true
    },
    {
      name: "Cheesey Bread",
      category: "Apps",
      price: 8.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Garlic Knots",
      category: "Apps",
      price: 8.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Wings",
      category: "Apps",
      price: 11.99,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Soda",
      category: "Drinks",
      price: 3.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Milk",
      category: "Drinks",
      price: 2.5,
      vegetarian: true,
      soldOut: true
    },
    {
      name: "Water",
      category: "Drinks",
      price: 2.5,
      vegetarian: true,
      soldOut: false
    },
  ]
  
  cart: MenuItem[] = [];

   addToCart(m: MenuItem): void{
    this.cart.push(m);
    
  }
  DisplayPrice(): string{
    let total = this.cart.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  }

  
}
