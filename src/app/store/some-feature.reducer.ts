import * as fromSomeFeature from './some-feature.actions';

export interface SomeFeatureState {
  someValue: number;
  someOtherValue: string;
}

export const initialState: SomeFeatureState = {
  someValue: 14,
  someOtherValue: 'some'
};

export function reducer(
  state = initialState,
  action: fromSomeFeature.All
): SomeFeatureState {
  switch (action.type) {
    case fromSomeFeature.SomeFeatureActions.AnAction:
      console.log('an action ran.\n');
      console.log('\n');
      break;
    case fromSomeFeature.SomeFeatureActions.AnotherAction:
      console.log('another action ran.');
      console.log('\n');
      break;
  }

  return state;
}

export const getSomeValue = (state: SomeFeatureState) => {
  console.dir(state);
  return state.someValue;
}
export const getSomeOtherValue = (state: SomeFeatureState) => state.someOtherValue;
