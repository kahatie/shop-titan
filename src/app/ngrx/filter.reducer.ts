import { createReducer, on } from '@ngrx/store';
import * as FilterAction from './filter.actions';

export interface State {
  selectedCategory: string;
  selectedFilter: string;
  selectedWeaponFilter: string;
  selectedArmorFilter: string;
  selectedAccessoryFilter: string;
  selectedEnchantmentFilter: string;
  selectedStoneFilter: string;
}

export const initialState: State = {
  selectedCategory: 'weapons',
  selectedFilter: 'sword',
  selectedWeaponFilter: 'sword',
  selectedArmorFilter: 'armorheavy',
  selectedAccessoryFilter: 'herb',
  selectedEnchantmentFilter: 'element_fire',
  selectedStoneFilter: 'rune'
};

export const filterFeatureKey = 'filter';

const filterReducer = createReducer(
  initialState,
  on(FilterAction.selecteCategory, (state, { select }) => ({
    ...state,
    selectedCategory: select
  })),
  // on(decrement, state => state - 1),
  on(FilterAction.reset, state => ({ ...initialState }))
);

export function reducer(state: State, action) {
  return filterReducer(state, action);
}
