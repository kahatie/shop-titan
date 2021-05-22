import { createAction, props } from '@ngrx/store';

export const selecteCategory = createAction(
  '[Filter Component] Select Category',
  props<{ select: string }>()
);
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
