import { createAction, props } from '@ngrx/store';
import { ConfigState } from './config.reducer';

export const LoadConfig = createAction('[Config] Load Init');

export const SuccessLoadConfig = createAction(
  '[Config] Load Success',
  props<{ payload: ConfigState }>(),
);
