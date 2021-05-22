import { createReducer, createSelector, on } from '@ngrx/store';
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
  on(FilterAction.selectCategory, (state, { select }) => ({
    ...state,
    selectedCategory: select
  })),
  // on(decrement, state => state - 1),
  on(FilterAction.reset, state => ({ ...initialState }))
);

export function reducer(state: State, action) {
  return filterReducer(state, action);
}

export const selectCategory = (state: State): string => state.selectedCategory;

export const selectSubCategory = (state: State): string => {
  let cat = selectCategory(state);
  return state['selected' + cat + 'Filter'];
};
