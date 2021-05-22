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
      map(items => items.slice(0, 10))
    );
  }
}
