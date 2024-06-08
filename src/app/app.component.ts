import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListCompComponent } from './wish-list-comp/wish-list-comp.component';
import { AssWishFormComponent } from './ass-wish-form/ass-wish-form.component';


const filters = [
  (item: WishItem) => true,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListCompComponent, AssWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
  }
  listFilter: any = '0';

  // newWishText = '';
  // addNewWish() {
  //   this.items.push(new WishItem(this.newWishText));
  //   // this.visibleItems = this.items;//my solution
  //   this.newWishText = '';
  //   console.log('add new wish');
  // }
}
