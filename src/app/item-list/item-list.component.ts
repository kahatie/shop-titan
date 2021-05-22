import { Component, OnInit } from '@angular/core';
import ItemsJson from '../../assets/items.json';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.items$ = of(ItemsJson).pipe(
      map(items => Object.values(items)),
      map(items => items.filter(item => item.excl != null)),
      map(items => {
        const result = [];
        const map = new Map();
        for (const item of items) {
          if (!map.has(item.type)) {
            map.set(item.type, true); // set any value to Map
            result.push(item);
          }
        }
        return result;
      }),
      map(items => items.slice(0, 50))
    );
  }
}
