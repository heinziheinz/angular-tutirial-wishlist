import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-comp.component.html',
  styleUrl: './wish-list-comp.component.css'
})
export class WishListCompComponent {
  @Input() wishes: WishItem[] = [];


  toggleItem(item: WishItem) {
    console.log("this.wishes")
    // console.log(this.wishes)
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
