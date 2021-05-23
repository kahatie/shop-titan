import { createAction, props } from '@ngrx/store';

export const selectCategory = createAction(
  '[Filter Component] Select Category',
  props<{ select: string }>()
);
export const selectSubCategory = createAction(
  '[Filter Component] Select Sub Category',
  props<{ category: string; subCategory: string }>()
);

export const reset = createAction('[Counter Component] Reset');
