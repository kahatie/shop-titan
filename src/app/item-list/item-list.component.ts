import { Component, OnInit } from '@angular/core';
import ItemsJson from '../../assets/items.json';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemService } from '../item.service';
import { Store } from '@ngrx/store';
import { filterFeatureKey, State } from '../ngrx/filter.reducer';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<any>;

  state: { [key: string]: string } = {
    selectedCategory: 'weapons',
    selectedFilter: 'sword',
    selectedWeaponFilter: 'sword',
    selectedArmorFilter: 'armorheavy',
    selectedAccessoryFilter: 'herb',
    selectedEnchantmentFilter: 'element_fire',
    selectedStoneFilter: 'rune'
  };

  filters$: Observable<State>;

  constructor(private readonly store: Store, public itemService: ItemService) {
    // this.filters$ = store.select('filter');
  }

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
