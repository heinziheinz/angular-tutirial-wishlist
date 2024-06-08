import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListCompComponent } from './wish-list-comp/wish-list-comp.component';
import { AssWishFormComponent } from './ass-wish-form/ass-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListCompComponent, AssWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("new phone"),
    new WishItem("new laptop", true),
    new WishItem("new car"),
  ]

  filter: any = () => { };


  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter);
  }
  listFilter: any = '0';
}
