import { Component, Output, Input, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => true,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements AfterViewInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  ngAfterViewInit(): void {
    // Promise.resolve().then(() => this.updateFilter('0'));
    this.updateFilter('0');
  }
  listFilter: any = '0';
  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
