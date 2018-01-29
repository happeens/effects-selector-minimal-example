import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSomeFeature from './some-feature.reducer';

export interface State {
  someFeatureModuleState: SomeFeatureModuleState;
}

export interface SomeFeatureModuleState {
  someFeature: fromSomeFeature.SomeFeatureState;
}

export const reducers: ActionReducerMap<SomeFeatureModuleState> = {
  someFeature: fromSomeFeature.reducer
};

export const getSomeFeatureModuleState =
  createFeatureSelector<SomeFeatureModuleState>('someFeatureModuleState');

export const getSomeFeatureState = createSelector(
  getSomeFeatureModuleState,
  (state: SomeFeatureModuleState) => state.someFeature
);

export const getSomeValue = createSelector(
  getSomeFeatureState,
  fromSomeFeature.getSomeValue
);

export const getSomeOtherValue = createSelector(
  getSomeFeatureState,
  fromSomeFeature.getSomeOtherValue
);
