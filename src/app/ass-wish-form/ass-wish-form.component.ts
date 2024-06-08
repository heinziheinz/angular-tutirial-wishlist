import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'ass-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ass-wish-form.component.html',
  styleUrl: './ass-wish-form.component.css'
})
export class AssWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';
  addNewWish() {
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    // this.visibleItems = this.items;//my solution
    this.newWishText = '';
    console.log('add new wish');
  }
}
