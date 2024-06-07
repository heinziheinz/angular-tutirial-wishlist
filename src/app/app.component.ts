import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';


const filters = [
  (item: WishItem) => true,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("new phone"),
    new WishItem("new laptop", true),
    new WishItem("new car"),
  ]
  title = 'this is my wishlist';
  // visibleItems = this.items;
  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
    // wehenever a new value is assigned to listFilter, this getter is called
    // let value = this.listFilter;

    // if (value === '0') {
    //   return this.items;
    // } else if (value === '1') {
    //   return this.items.filter(item => !item.isComplete);
    // } else {
    //   return this.items.filter(item => item.isComplete);
    // }
  }
  listFilter: any = '0';

  newWishText = '';
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    // this.visibleItems = this.items;//my solution
    this.newWishText = '';
    console.log('add new wish');
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
