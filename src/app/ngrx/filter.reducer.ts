import { createReducer, createSelector, on } from '@ngrx/store';
import * as FilterAction from './filter.actions';

export interface State {
  selectedCategory: string;
  selectedSubCategory: {
    weapons: string;
    armors: string;
    accessories: string;
    enchantments: string;
    stones: string;
  };
}

export const initialSubCategory = {
  weapons: 'sword',
  armors: 'armorheavy',
  accessories: 'herb',
  enchantments: 'element_fire',
  stones: 'rune'
};

export const initialState: State = {
  selectedCategory: 'weapons',
  selectedSubCategory: initialSubCategory
};

export const filterFeatureKey = 'filter';

const filterReducer = createReducer(
  initialState,
  on(FilterAction.selectCategory, (state, { select }) => ({
    ...state,
    selectedCategory: select
  })),
  on(FilterAction.selectSubCategory, (state, { category, subCategory }) => ({
    ...state,
    selectedSubCategory: {
      ...state.selectedSubCategory,
      [category]: subCategory
    }
  })),
  on(FilterAction.reset, state => ({ ...initialState }))
);

export function reducer(state: State, action) {
  return filterReducer(state, action);
}

export const selectCategory = (state: State): string => state.selectedCategory;

export const selectSubCategory = (state: State): string => {
  let cat = selectCategory(state);
  return state.selectedSubCategory[cat];
};
