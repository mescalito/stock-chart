import { AppStatus } from '@st/interfaces';
import { createReducer, on } from '@ngrx/store';
import { LoadConfig, SuccessLoadConfig } from './config.action';

export const ConfigFeatureKey = 'config';

export interface ConfigState {
  status: AppStatus;
}

export const initConfig: ConfigState = { status: null };

export const configReducer = createReducer(
  initConfig,
  on(LoadConfig, state => state),
  on(SuccessLoadConfig, (state: ConfigState, { payload }) => ({
    ...state,
    ...payload,
  })),
);
