import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

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
  visibleItems = this.items;
  listFilter = '0';

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

  filterChanged(value: string) {
    console.log(value);
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
}
