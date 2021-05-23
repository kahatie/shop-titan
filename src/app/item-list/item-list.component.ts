import { Component, OnInit } from '@angular/core';
import ItemsJson from '../../assets/items.json';
import { Observable, of, merge, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../item.service';
import { Store } from '@ngrx/store';
import { State } from '../ngrx/filter.reducer';
import { selectCategory } from '../ngrx/filter.actions';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;
  filters$: Observable<State>;
  subCategory$: Observable<string[]>;

  constructor(
    private readonly store: Store<{ filter: State }>,
    public itemService: ItemService
  ) {
    this.filters$ = store.select('filter');
    // this.subCategory$ = this.filters$.pipe();
  }

  ngOnInit() {
    this.items$ = of(ItemsJson).pipe(
      map(items => Object.values(items)),
      map((items: Item[]) => items.filter(item => item.excl != null)),
      // filter item form filter
      items$ =>
        combineLatest([items$, this.filters$]).pipe(
          map(([items, filter]) => this.filterItems(items, filter))
        ),
      // limit end result for test
      map(items => items.slice(0, 50))
    );
  }

  selectCategory(category: string) {
    this.store.dispatch(selectCategory({ select: category }));
  }

  filterItems(items: any[], filter: State): any[] {
    let types = Object.keys(
      this.itemService.items.key[filter.selectedCategory].key
    );
    return items.filter(item => types.includes(item.type));
  }
}
