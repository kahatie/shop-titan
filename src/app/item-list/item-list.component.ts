import { Component, OnInit } from '@angular/core';
import ItemsJson from '../../assets/items.json';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../item.service';
import { Store } from '@ngrx/store';
import { selectSubCategory, State } from '../ngrx/filter.reducer';
import * as FilterAction from '../ngrx/filter.actions';
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
  selectedSubCategory$: Observable<string>;

  constructor(
    private readonly store: Store<{ filter: State }>,
    public itemService: ItemService
  ) {
    this.filters$ = store.select('filter');
    this.subCategory$ = this.filters$.pipe(
      map(state => state.selectedCategory),
      map(category => this.itemService.items.key[category].order)
    );
    this.selectedSubCategory$ = this.filters$.pipe(
      map(state => selectSubCategory(state))
    );
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
    this.store.dispatch(FilterAction.selectCategory({ select: category }));
  }
  selectSubCategory(category: string, subCategory: string) {
    this.store.dispatch(
      FilterAction.selectSubCategory({
        category: category,
        subCategory: subCategory
      })
    );
  }

  filterItems(items: any[], filter: State): any[] {
    let cat = filter.selectedCategory;
    let subCategory = filter.selectedSubCategory[cat];

    let subCategories: { [key: string]: string } = this.itemService.items.key[
      cat
    ].key;

    let type = Object.keys(subCategories).find(
      key => subCategories[key] === subCategory
    );
    return items.filter(item => item.type === type);
  }

  getIconUrl(category: string, subCategory: string): string {
    let cat = category != 'accessories' ? category.slice(0, -1) : 'accessory';
    return '/ui/itemtypes/icon_' + cat + '_' + subCategory + '.png';
  }
}
