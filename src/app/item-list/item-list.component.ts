import { Component, OnInit } from '@angular/core';
import ItemsJson from '../../assets/items.json';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.items$ = of(ItemsJson);
  }
}
